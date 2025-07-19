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
5. [Transaction Management](#transaction-management)
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

### API Key Authentication
All provider endpoints require authentication using API keys:

```http
X-API-Key: your-provider-api-key
X-API-Secret: your-provider-api-secret
```

### Authentication Headers
- `X-API-Key`: Provider's unique API key
- `X-API-Secret`: Provider's API secret for request signing

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
    "payment_method_id": "103382b71a39341f18c05d8fa86476efc",
    "sending_address": "0x1a2b3c4d5e6f7g8h9i0j",
    "source": "exchange"
}
```

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

## Transaction Management

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

**Purpose**: Retrieve all transactions for a provider with optional filtering.

**Endpoint**: `POST /get-lr-transactions`

**Request**:
```json
{
    "provider_id": 2,
    "status": "SUCCESS",
    "limit": 10,
    "offset": 0
}
```

**Response**:
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

### 6. Auto Transaction Status

**Purpose**: Automatically update transaction status based on crypto and fiat events.

**Endpoint**: `POST /auto-transaction-status`

**Request**:
```json
{
    "transaction_id": "tx123456789",
    "event_type": "crypto_received",
    "data": {
        "amount": "100.00",
        "chain": "BSC",
        "hash": "0x1234567890abcdef...",
        "from_address": "0xfromaddress...",
        "to_address": "0xtoaddress...",
        "asset_code": "USDC",
        "fee": "0.0001"
    }
}
```

**Response**:
```json
{
    "status": 200,
    "message": "Transaction status updated successfully",
    "data": {
        "transaction_id": "tx123456789",
        "status": "CRYPTO_RECEIVED",
        "updated_at": "2025-03-25T12:30:00.000Z"
    }
}
```

## Webhook Integration

### Webhook Endpoint
Providers must send status updates to MUDA's webhook endpoint:

**Endpoint**: `https://api.muda.tech/v1/rail/accounts/events`

### Webhook Events

#### Crypto Received Event
```json
{
    "eventType": "crypto_received",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
    "data": {
        "amount": "100.00",
        "chain": "BSC",
        "hash": "0x1234567890abcdef...",
        "from_address": "0xfromaddress...",
        "to_address": "0xtoaddress...",
        "asset_code": "USDC",
        "fee": "0.0001"
    }
}
```

#### Fiat Sent Event
```json
{
    "eventType": "fiat_sent",
    "provider_id": "your-provider-id",
    "quote_id": "quote-id-123",
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
        "fee": "1000.00"
    }
}
```

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
- `POST /auto-transaction-status`

### Security Requirements
- HTTPS encryption for all endpoints
- API key authentication
- Rate limiting
- Input validation
- Secure error handling

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