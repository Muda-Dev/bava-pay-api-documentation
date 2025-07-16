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
    "amount": 10,
    "currency": "ZAR",
    "asset_code": "USDT",
    "service_code": "BANK_TRANSFER"
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
        "expires_at": "2024-05-16T12:30:00Z"
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
    "source": "exchange",
    "company_id": "34"
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
        "provider_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "provider_memo": "memo123"
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