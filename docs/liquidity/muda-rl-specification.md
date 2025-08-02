---
id: muda-rl-specification
title: MUDA Liquidity Rail Provider Specification 1.0.1
sidebar_position: 1
---

# MUDA Liquidity Rail Provider Specification 1.0.1

## Overview

The MUDA Liquidity Rail (MRL) Provider Specification defines the standard interface that external service providers must implement to integrate with the MUDA Liquidity Rail platform. This specification enables seamless crypto-to-fiat and fiat-to-crypto transactions through a standardized API.

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture Overview](#architecture-overview)
3. [Authentication](#authentication)
4. [Core Endpoints](#core-endpoints)
5. [Transaction Status Codes & Lifecycle](#transaction-status-codes--lifecycle)
6. [Webhook Integration](#webhook-integration)
7. [Data Models](#data-models)
8. [Error Handling](#error-handling)
9. [Implementation Guide](#implementation-guide)

## Introduction

### Purpose
The MRL Provider Specification enables third-party providers to offer liquidity services through the MUDA platform. Providers implement standardized endpoints that handle quote generation, transaction confirmation, and status updates.

### Scope
This specification covers:
- Quote generation and management
- Transaction confirmation and tracking
- Status updates and webhooks
- Error handling and response formats

### Version History
- **1.0.1** - Current version with comprehensive transaction tracking
- **1.0.0** - Initial specification

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   MUDA Client   │    │   MUDA Platform │    │   Provider API  │
│                 │    │                 │    │                 │
│ • Generate      │───▶│ • Route Requests│───▶│ • Generate Quote│
│   Quote         │    │ • Track Status  │    │ • Confirm Quote │
│ • Confirm Quote │    │ • Handle Events │    │ • Update Status │
│ • Track Status  │◀───│ • Send Webhooks │◀───│ • Send Webhooks │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Provider Responsibilities
1. **Quote Management**: Generate and refresh exchange rates
2. **Transaction Processing**: Handle crypto and fiat transactions
3. **Status Updates**: Provide real-time transaction status
4. **Webhook Integration**: Send status updates to MUDA

## Authentication

### Bearer Token Authentication
All provider endpoints require authentication using a JWT Bearer token provided by MUDA.

### Authentication Headers
```http
Authorization: Bearer <your-bearer-token>
```

### Security Requirements
- **HTTPS Only**: All endpoints must use TLS 1.2 or higher
- **Secure Storage**: Bearer tokens must be stored securely
- **Request Validation**: All requests must be validated
- **Timestamp Validation**: Requests older than 10 minutes are rejected

### Muda webhook signing
Muda signs all outgoing webhooks to providers using an HMAC signature. Each webhook request includes an `X-Signature` header containing the signature, which is generated using a shared secret (provided to the provider out-of-band) and the raw request body.

**Signature Header Example:**

## Core Endpoints

### 1. Generate Quote

**Purpose**: Generate a quote for a crypto-to-fiat or fiat-to-crypto transaction.

**Endpoint**: `POST /generate-lr-quote`

**Request**:
```json
{
    "asset_code": "USDC_BSC",
    "amount": 3,
    "currency": "UGX",
    "service_id": "1000"
}
```

**Response**:
```json
{
    "status": 200,
    "message": "Quote generated successfully",
    "data": {
        "quote_id": "q1234567890",
        "rate": 15.50,
        "fee": 0.75,
        "total_amount": 155.75,
        "expires_at": "2024-05-16T12:30:00Z",
        "service_id": "1000"
    }
}
```

### 2. Confirm Quote

**Purpose**: Confirm a previously generated quote and create a transaction.

**Endpoint**: `POST /confirm-lr-quote`

**Request**:
```json
{
    "quote_id": "q1234567890",
    "reference_id": "REF987654321",
    "payment_method": {
        "type": "mobile_money",
        "currency": "UGX",
        "phone_number": "0772123456",
        "country_code": "UG",
        "network": "MTN",
        "account_name": "John Doe"
    },
    "sending_address": "0x1a2b3c4d5e6f7g8h9i0j",
    "source": "exchange"
}
```

**Note**: The `payment_method` object contains the complete payment details that the provider needs to process the transaction. MUDA stores these payment methods and sends the full object to providers.

**Response**:
```json
{
    "status": 200,
    "message": "Quote confirmed successfully",
    "data": {
        "transaction_id": "tx123456789",
        "status": "PENDING",
        "pay_in_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "memo": "memo123",
        "send_amount": "10"
    }
}
```

### 3. Refresh Quote

**Purpose**: Refresh an existing quote with updated rates.

**Endpoint**: `POST /refresh-lr-quote`

**Request**:
```json
{
    "quote_id": "q1234567890"
}
```

**Response**:
```json
{
    "status": 200,
    "message": "Quote refreshed successfully",
    "data": {
        "quote_id": "q1234567890",
        "new_rate": 15.75,
        "fee": 0.78,
        "total_amount": 157.53,
        "expires_at": "2024-05-16T12:35:00Z"
    }
}
```

### 4. Get Transaction

**Purpose**: Retrieve complete transaction details including both crypto and fiat sides.

**Endpoint**: `POST /get-lr-transaction`

**Request**:
```json
{
    "transaction_id": "tx123456789"
}
```

**Response**:
```json
{
    "status": 200,
    "message": "Transaction found",
    "data": {
        "transaction_id": "tx123456789",
        "quote_id": "quote-id-123",
        "provider_id": "your-provider-id",
        "status": "SUCCESS",
        "created_on": "2025-03-25T12:26:53.000Z",
        "from_currency": "USDC",
        "to_currency": "UGX",
        "from_amount": "10",
        "to_amount": "50000",
        "transaction_type": "offramp",
        "coinTransaction": {
            "status": "PENDING",
            "amount": "100.00",
            "chain": "BSC",
            "hash": "0x1234567890abcdef...",
            "from_address": "0xfromaddress...",
            "to_address": "0xtoaddress...",
            "asset_code": "USDC",
            "fee": "0.0001"
        },
        "fiatTransaction": {
            "status": "SUCCESS",
            "amount": "50000.00",
            "amount_delivered": 50000,
            "currency": "UGX",
            "reference_id": "REF-987654321",
            "fee": "1000.00",
            "account": {
                "type": "mobile_money",
                "currency": "UGX",
                "phone_number": "0772123456",
                "country_code": "UG",
                "network": "MTN",
                "account_name": "John Doe"
            }
        }
    }
}
```

### 5. Get All Transactions

Get all transactions for a provider with optional filtering.

**Method:** POST  
**Endpoint:** `{{YOUR_API_BASE_URL}}/get-lr-transactions`

**Request:**
```json
{
    "provider_id": 2,
    "status": "SUCCESS",
    "limit": 10,
    "offset": 0
}
```

**Response:**
```json
{
    "status": 200,
    "message": "Transactions retrieved successfully",
    "data": [
        {
            "transaction_id": "tx123456789",
            "quote_id": "quote-id-123",
            "provider_id": "your-provider-id",
            "status": "SUCCESS",
            "created_on": "2025-03-25T12:26:53.000Z",
            "from_currency": "USDC",
            "to_currency": "UGX",
            "from_amount": "10",
            "to_amount": "50000",
            "transaction_type": "offramp",
            "coinTransaction": {
                "status": "PENDING",
                "amount": "100.00",
                "chain": "BSC",
                "hash": "0x1234567890abcdef...",
                "from_address": "0xfromaddress...",
                "to_address": "0xtoaddress...",
                "asset_code": "USDC",
                "fee": "0.0001"
            },
            "fiatTransaction": {
                "status": "SUCCESS",
                "amount": "50000.00",
                "amount_delivered": 50000,
                "currency": "UGX",
                "reference_id": "REF-987654321",
                "fee": "1000.00",
                "account": {
                    "type": "mobile_money",
                    "currency": "UGX",
                    "phone_number": "0772123456",
                    "country_code": "UG",
                    "network": "MTN",
                    "account_name": "John Doe"
                }
            }
        }
    ]
}
```

## Webhook Integration

### Webhook Endpoint
Providers must send status updates to MUDA's webhook endpoint:

**Endpoint**: `https://api.muda.tech/v1/rail/accounts/events`

### Webhook Security Requirements

#### Webhook Signing Key
MUDA will provide each provider with a unique webhook signing key. All webhook payloads must be signed using HMAC-SHA256:

```typescript
const signature = crypto
  .createHmac('sha256', webhookSigningKey)
  .update(JSON.stringify(payload))
  .digest('hex');
```

#### IP Whitelisting
Providers must whitelist MUDA's IP addresses:
- `54.243.89.55/32` (Stage)
- `13.**.**.**/32` (Production) -  Full Ip provided on go live

#### Webhook Headers
```http
Content-Type: application/json
X-Webhook-Signature: <hmac-signature>
X-Webhook-Timestamp: <unix-timestamp>
Authorization: Bearer <muda-webhook-token>
```

### Fraud Prevention & Consequences

#### False Transaction Reporting
**CRITICAL**: Providers must never report successful transactions unless funds have actually been sent. Consequences of false reporting include:

- **Immediate Suspension**: Provider account suspended for 24-48 hours
- **Financial Penalties**: Fines up to 10x the transaction amount
- **Legal Action**: Potential legal proceedings for fraud
- **Permanent Ban**: Repeated violations result in permanent provider removal
- **Reputation Damage**: Public disclosure of violations

#### Verification Requirements
- **Crypto Transactions**: Must verify blockchain confirmation (minimum 3 confirmations)
- **Fiat Transactions**: Must verify bank/mobile money confirmation
- **Documentation**: Must maintain detailed transaction logs for 7 years
- **Audit Trail**: All transactions must have complete audit trails

### Webhook Events

#### Crypto Received Event
```json
{
    "eventType": "crypto_received",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
    "signature": "hmac-signature-here",
    "timestamp": 1640995200,
    "data": {
        "amount": "100.00",
        "chain": "BSC",
        "hash": "0x1234567890abcdef...",
        "from_address": "0xfromaddress...",
        "to_address": "0xtoaddress...",
        "asset_code": "USDC",
        "fee": "0.0001",
        "confirmations": 6
    }
}
```

#### Fiat Sent Event
```json
{
    "eventType": "fiat_sent",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
    "signature": "hmac-signature-here",
    "timestamp": 1640995200,
    "status": "SUCCESS",
    "data": {
        "amount": "50000.00",
        "amount_delivered": 50000,
        "currency": "UGX",
        "reference_id": "REF-987654321",
        "account_number": "0772123456",
        "payment_type": "mobile_money",
        "payment_method": "MTN Uganda",
        "network": "MTN",
        "country": "UG",
        "receiver_name": "John Doe",
        "fee": "1000.00",
        "transaction_id": "MTN-TX-123456789"
    }
}
```

#### Transaction Failed Event
```json
{
    "eventType": "transaction_failed",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
    "signature": "hmac-signature-here",
    "timestamp": 1640995200,
    "status": "FAILED",
    "data": {
        "error_code": "INSUFFICIENT_FUNDS",
        "error_message": "Provider lacks sufficient liquidity",
        "stage": "PROCESSING_PAYOUT",
        "refund_required": true,
        "crypto_amount": "100.00",
        "refund_address": "0xrefundaddress..."
    }
}
```

#### Quote Expired Event
```json
{
    "eventType": "quote_expired",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
    "signature": "hmac-signature-here",
    "timestamp": 1640995200,
    "status": "EXPIRED",
    "data": {
        "expired_at": "2024-05-16T12:45:00Z",
        "reason": "No payment received within timeout period"
    }
}
```

#### Fiat Received Event (Offramp)
```json
{
    "eventType": "fiat_received",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
    "signature": "hmac-signature-here",
    "timestamp": 1640995200,
    "data": {
        "amount": "50000.00",
        "currency": "UGX",
        "reference_id": "REF-987654321",
        "account_number": "0772123456",
        "payment_type": "mobile_money",
        "payment_method": "MTN Uganda",
        "network": "MTN",
        "country": "UG",
        "sender_name": "John Doe",
        "transaction_id": "MTN-TX-123456789"
    }
}
```

#### Crypto Sent Event (Offramp)
```json
{
    "eventType": "crypto_sent",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
    "signature": "hmac-signature-here",
    "timestamp": 1640995200,
    "status": "SUCCESS",
    "data": {
        "amount": "100.00",
        "chain": "BSC",
        "hash": "0x1234567890abcdef...",
        "from_address": "0xprovideraddress...",
        "to_address": "0xuseraddress...",
        "asset_code": "USDC",
        "fee": "0.0001",
        "confirmations": 1
    }
}
```

### MUDA Webhooks to Providers

MUDA will send webhook events to providers for transaction updates and notifications.

#### MUDA Webhook Security
All webhook events from MUDA are signed and authenticated. MUDA sends authentication in webhook headers:

**Endpoint**: `{{YOUR_WEBHOOK_ENDPOINT}}/muda-events`

**Headers**:
```http
Content-Type: application/json
X-Muda-Signature: <hmac-signature>
X-Muda-Timestamp: <unix-timestamp>
X-Muda-Event-Type: <event-type>
Authorization: Bearer <muda-webhook-token>
```

#### MUDA Webhook Validation
Providers must validate all incoming webhooks from MUDA:

```typescript
const isValidWebhook = (payload: string, signature: string, timestamp: string) => {
  const expectedSignature = crypto
    .createHmac('sha256', mudaWebhookKey)
    .update(payload + timestamp)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
};
```

#### MUDA Webhook Events
- **Transaction Updates**: Status changes and confirmations
- **Quote Updates**: Rate changes and expirations
- **System Notifications**: Maintenance and service updates

## Data Models

### Quote Data
```typescript
interface QuoteData {
  quote_id: string;
  rate: number;
  fee: number;
  total_amount: number;
  expires_at: string;
  service_id: string;
}
```

### Transaction Data
```typescript
interface TransactionData {
  transaction_id: string;
  quote_id: string;
  provider_id: string;
  status: string;
  created_on: string;
  from_currency: string;
  to_currency: string;
  from_amount: string;
  to_amount: string;
  transaction_type: string;
  coinTransaction?: PayInTransaction;
  fiatTransaction?: PayoutTransaction;
}
```

### Coin Transaction
```typescript
interface PayInTransaction {
  status: string;
  amount: string;
  chain: string;
  hash: string;
  from_address: string;
  to_address: string;
  asset_code: string;
  fee: string;
}
```

### Fiat Transaction
```typescript
interface PayoutTransaction {
  status: string;
  amount: string;
  amount_delivered: number;
  currency: string;
  reference_id: string;
  fee: string;
  account: BankPayment | MobileMoneyPayment;
}
```

### Payment Methods
```typescript
interface BankPayment {
  type: 'bank';
  bank_name: string;
  bank_code: string;
  currency: string;
  account_number: string;
  account_name: string;
  swift_code: string;
  bank_country: string;
}

interface MobileMoneyPayment {
  type: 'mobile_money';
  currency: string;
  phone_number: string;
  country_code: string;
  network: string;
  account_name: string;
}
```

## Transaction Status Codes & Lifecycle

### Offramp Transaction Status Flow (Fiat-to-Crypto)
```
PENDING → FIAT_RECEIVED → PROCESSING_CRYPTO → CRYPTO_QUEUED → TRANSACTION_SUCCESS
    ↓           ↓                    ↓                ↓
    ↓           ↓                    ↓                ↓
    ↓           ↓                    ↓                ↓
EXPIRED    TRANSACTION_FAILED   TRANSACTION_FAILED   TRANSACTION_FAILED
```

### Onramp Transaction Status Flow (Crypto-to-Fiat)
```
PENDING → CRYPTO_RECEIVED → PROCESSING_PAYOUT → PAYOUT_QUEUED → TRANSACTION_SUCCESS
    ↓           ↓                    ↓                ↓
    ↓           ↓                    ↓                ↓
    ↓           ↓                    ↓                ↓
EXPIRED    TRANSACTION_FAILED   TRANSACTION_FAILED   TRANSACTION_FAILED
```

### Status Code Definitions

#### Onramp (Crypto-to-Fiat) Status Codes

##### `PENDING`
- **Description**: Transaction created, waiting for crypto payment
- **Duration**: 15 minutes (expires if no crypto received)
- **Action Required**: User must send crypto to provided address
- **Webhook**: None

##### `CRYPTO_RECEIVED`
- **Description**: Crypto payment confirmed on blockchain
- **Duration**: 5-10 minutes (processing time)
- **Action Required**: Provider processes fiat payout
- **Webhook**: `crypto_received` event sent to MUDA

##### `PROCESSING_PAYOUT`
- **Description**: Provider is processing fiat payout
- **Duration**: 2-5 minutes
- **Action Required**: Provider validates and sends fiat
- **Webhook**: None (internal processing)

##### `PAYOUT_QUEUED`
- **Description**: Fiat payout queued for processing
- **Duration**: 1-3 minutes
- **Action Required**: Provider executes payout
- **Webhook**: None (internal processing)

##### `TRANSACTION_SUCCESS`
- **Description**: Fiat payout completed successfully
- **Duration**: Final state
- **Action Required**: None
- **Webhook**: `fiat_sent` event sent to MUDA

#### Offramp (Fiat-to-Crypto) Status Codes

##### `PENDING`
- **Description**: Transaction created, waiting for fiat payment
- **Duration**: 15 minutes (expires if no fiat received)
- **Action Required**: User must send fiat to provided account
- **Webhook**: None

##### `FIAT_RECEIVED`
- **Description**: Fiat payment confirmed by provider
- **Duration**: 5-10 minutes (processing time)
- **Action Required**: Provider processes crypto payout
- **Webhook**: `fiat_received` event sent to MUDA

##### `PROCESSING_CRYPTO`
- **Description**: Provider is processing crypto payout
- **Duration**: 2-5 minutes
- **Action Required**: Provider validates and sends crypto
- **Webhook**: None (internal processing)

##### `CRYPTO_QUEUED`
- **Description**: Crypto payout queued for processing
- **Duration**: 1-3 minutes
- **Action Required**: Provider executes crypto payout
- **Webhook**: None (internal processing)

##### `TRANSACTION_SUCCESS`
- **Description**: Crypto payout completed successfully
- **Duration**: Final state
- **Action Required**: None
- **Webhook**: `crypto_sent` event sent to MUDA

#### Common Status Codes

##### `TRANSACTION_FAILED`
- **Description**: Transaction failed at any stage
- **Duration**: Final state
- **Action Required**: Provider must handle refund if payment was received
- **Webhook**: `transaction_failed` event sent to MUDA

##### `EXPIRED`
- **Description**: Quote expired before payment received
- **Duration**: Final state
- **Action Required**: None
- **Webhook**: `quote_expired` event sent to MUDA

### Status Code Requirements

#### Provider Responsibilities
- **Real-time Updates**: Update status within 30 seconds of state change
- **Webhook Notifications**: Send webhooks for all status changes
- **Timeout Handling**: Handle expired quotes and failed transactions
- **Refund Processing**: Process refunds for failed transactions with crypto received

#### Status Validation
- **Crypto Confirmation**: Minimum 3 blockchain confirmations required
- **Fiat Verification**: Provider must verify payout completion
- **Audit Trail**: All status changes must be logged
- **Error Handling**: Failed transactions must have detailed error messages

## Error Handling

### Standard Error Response
```json
{
    "status": 400,
    "message": "Error description",
    "data": null
}
```

### HTTP Status Codes
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

### Common Error Scenarios
1. **Quote Not Found**: When attempting to confirm or refresh a non-existent quote
2. **Transaction Not Found**: When requesting details for a non-existent transaction
3. **Invalid Request**: When required fields are missing or invalid
4. **Authentication Failed**: When API keys are invalid or missing
5. **Transaction Expired**: When quote expires before confirmation
6. **Insufficient Funds**: When provider lacks liquidity for payout
7. **Network Issues**: When blockchain or banking networks are unavailable

## Implementation Guide

### Getting Started
1. **Contact MUDA**: Reach out to become a registered provider
2. **Set up Infrastructure**: Deploy your provider API endpoints
3. **Implement Core Endpoints**: Build the required endpoints
4. **Test Integration**: Use MUDA's sandbox environment
5. **Go Live**: Deploy to production

### Required Endpoints
Providers must implement these endpoints:
- `POST /generate-lr-quote`
- `POST /confirm-lr-quote`
- `POST /refresh-lr-quote`
- `POST /get-lr-transaction`
- `POST /get-lr-transactions`

### Security Requirements
- **HTTPS Only**: All endpoints must use TLS 1.2 or higher
- **Bearer Token Authentication**: Use JWT Bearer tokens for API authentication
- **Webhook Signing**: Use HMAC-SHA256 for webhook payloads
- **IP Whitelisting**: Whitelist MUDA's IP addresses
- **Rate Limiting**: Implement rate limiting (1000 requests/hour)
- **Input Validation**: Validate all request parameters
- **Secure Error Handling**: Never expose sensitive information in errors
- **Token Management**: Store Bearer tokens securely
- **Audit Logging**: Log all API requests and responses
- **Fraud Prevention**: Implement strict verification before reporting success

### Testing
Use MUDA's sandbox environment to test your implementation before going live.

## Version 1.0.1 Changes

### New Features
- Comprehensive transaction tracking with both crypto and fiat sides
- Auto transaction status updates
- Enhanced error handling
- Improved webhook integration

### Breaking Changes
- Updated transaction data structure
- Renamed transaction fields for clarity
- Enhanced authentication requirements

### Deprecated Features
- Old transaction format (v1.0.0)
- Legacy webhook formats

---

**Document Version**: 1.0.1  
**Last Updated**: March 2025  
**Contact**: For questions about this specification, contact the MUDA development team. 