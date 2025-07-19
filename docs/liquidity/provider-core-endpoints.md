---
id: provider-core-endpoints
title: Core Endpoints
sidebar_position: 2
---

# Core Endpoints

These are the essential endpoints every provider must implement in their system.

## 1. Generate Quote

Generate a quote for a transaction request.

**Method:** POST  
**Endpoint:** `{{YOUR_API_BASE_URL}}/generate-lr-quote`

**Request:**
```json
{
    "asset_code": "USDC_BSC",
    "amount": 3,
    "currency": "UGX",
    "service_id": "1000"
}
```

**Response:**
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

## 2. Confirm Quote

Confirm a previously generated quote.

**Method:** POST  
**Endpoint:** `{{YOUR_API_BASE_URL}}/confirm-lr-quote`

**Request:**
```json
{
    "quote_id": "q1234567890",
    "reference_id": "REF987654321",
    "payment_method_id": "103382b71a39341f18c05d8fa86476efc",
    "sending_address": "0x1a2b3c4d5e6f7g8h9i0j",
    "source": "exchange"
}
```

**Response:**
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

## 3. Refresh Quote

Refresh an existing quote with updated rates.

**Method:** POST  
**Endpoint:** `{{YOUR_API_BASE_URL}}/refresh-lr-quote`

**Request:**
```json
{
    "quote_id": "q1234567890"
}
```

**Response:**
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

## 4. Get Transaction

Get both pay-in and payout transaction details.

**Method:** POST  
**Endpoint:** `{{YOUR_API_BASE_URL}}/get-lr-transaction`

**Request:**
```json
{
    "transaction_id": "tx123456789"
}
```

**Response:**
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

## 5. Auto Transaction Status

Automatically update transaction status based on crypto and fiat events.

**Method:** POST  
**Endpoint:** `{{YOUR_API_BASE_URL}}/auto-transaction-status`

**Request:**
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

**Response:**
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