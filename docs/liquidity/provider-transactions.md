---
id: provider-transactions
title: Transaction Management
sidebar_position: 3
---

# Transaction Management

Endpoints for tracking and managing transactions.

## 1. Get Transaction

Get details of a specific transaction.

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
        "quote_id": "q1234567890",
        "provider_id": 2,
        "company_id": 30,
        "send_asset": "CUSD",
        "send_amount": "10",
        "receive_currency": "UGX",
        "receive_amount": 35576,
        "ex_rate": "3557.6205",
        "account_number": "+256774343545",
        "service_id": 1000,
        "receiver_address": "0x6B407778C199987EFbD6470e34050b5588959B00",
        "pay_in_status": "PENDING",
        "status": "PENDING",
        "sending_address": "0x8968cf62c9d951781065e4e18a9a40c08f7a6801",
        "provider_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "provider_memo": "memo123",
        "fee": "1425.954",
        "created_on": "2025-03-25T12:26:53.000Z"
    }
}
```

## 2. Get All Transactions

Get all transactions for a provider with optional filtering.

**Method:** POST  
**Endpoint:** `{{YOUR_API_BASE_URL}}/get-lr-transactions`

**Request:**
```json
{
    "provider_id": 2,
    "status": "PENDING",
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
            "quote_id": "q1234567890",
            "provider_id": 2,
            "company_id": 30,
            "send_asset": "CUSD",
            "send_amount": "10",
            "receive_currency": "UGX",
            "receive_amount": 35576,
            "ex_rate": "3557.6205",
            "account_number": "+256774343545",
            "service_id": 1000,
            "status": "PENDING",
            "created_on": "2025-03-25T12:26:53.000Z"
        }
    ]
}
``` 