---
sidebar_position: 1
---

# Introduction

This document provides information about the Muda Payments API endpoints that are available for third-party integration. The API allows you to process **payments**, **check balances**, and **manage transactions**.

---

## Authentication

The Auth Token method is used to authenticate a client to the New Age platform. The client provides their secret key and API key to receive an access token. This token is used for subsequent requests to the platform.

All API requests (except for login) require authentication using a JWT token. The token should be included in the `Authorization` header as a Bearer token.

```
Authorization: Bearer <your_jwt_token>
```

## Base URL

```
https://api.muda.tech
```

---

# Liquidity Rail API Endpoints

## Get All Services
Get enabled services information.

**Method:** GET  
**Endpoint:** `/accounts/services`

**Response Example:**
```json
{
    "status": 200,
    "message": "Wallet balances",
    "data": {
        "wallet_id": 8
    }
}
```

## Get Rate
Get currency pairs exchange rate.

**Method:** GET  
**Endpoint:** `/accounts/getRate`

**Request Example:**
```json
{
  "symbol": "USDT",
  "currency": "KES",
  "amount": 300,
  "provider_id": 1
}
```
**Response Example:**
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "from": "USDT",
        "to": "KES",
        "value": 39209.67,
        "fiatAmount": 39209.67,
        "transactionAmount": "38821.46",
        "cryptoAmount": 300,
        "fee": "388.21"
    }
}
```

## Get Providers
Get a list of available service providers.

**Method:** POST  
**Endpoint:** `/accounts/provider`

**Request Example:**
```json
{
  "asset": "USDT",
  "currency": "UGX"
}
```
**Response Example:**
```json
[
  {
    "provider_service_id": 1,
    "service_id": 1000,
    "provider_id": 1,
    "min_amount": 0,
    "max_amount": 100000,
    "name": "Muda Ltd",
    "created_at": "2024-04-11T10:34:19.000Z",
    "approval_status": "active",
    "rates_endpoint": "https://dev-api.muda-v2.com/getRate",
    "auto_id": 1,
    "service_code": "MOBILE_MONEY",
    "service_name": "MOBILE MONEY",
    "country": "UG",
    "currency": "UGX",
    "provider_type": "mobile",
    "rate": 3712.03
  }
]
```

## Send Money (Make Quote)
Request a transaction quote.

**Method:** POST  
**Endpoint:** `/accounts/generateQuote`

**Request Example:**
```json
{
  "provider_id": "2",
  "send_asset": "USDC",
  "send_amount": 1,
  "account_number": "ACC987654321",
  "receive_currency": "UGX",
  "source":"wallet",
  "receive_amount": 3750.00,
  "service_id": "7",
  "chain": "STELLAR",
  "ex_rate": 3750.00,
  "receiver_address": "Kampala, Uganda",
  "payment_method_id": "1a95a475ec97147b0a51a2273f0bc94d1",
  "sending_address": "GANILKVETD47ETWB3CTGYWA7KEPNLN4R46D7G34VRAU6UTCIV5KEWOJF"
}
```
**Response Example:**
```json
{
    "status": 200,
    "message": "Transaction record saved",
    "data": "d523ad72c89940e5bb6091518c91c413"
}
```

## Get Transaction
Get the transaction details.

**Method:** GET  
**Endpoint:** `/accounts/getTransaction/{id}`

**Response Example:**
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "id": 72,
        "transId": "d523ad72c89940e5bb6091518c91c413",
        "provider_id": 2,
        "company_id": 30,
        "send_asset": "CUSD",
        "send_amount": "10",
        "receive_currency": "UGX",
        "receive_amount": 35649,
        "ex_rate": "3564.8858",
        "account_number": "+256774343545",
        "service_id": 1000,
        "receiver_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "pay_in_status": "PENDING",
        "status": "PENDING",
        "sending_address": "0x8968cf62c9d951781065e4e18a9a40c08f7a6888",
        "response_body": null,
        "reason": null,
        "created_on": "2025-03-25T12:26:53.000Z",
        "bank_name": "",
        "bank_code": "",
        "provider_ref_id": "d523ad72c89940e5bb6091518c91c413",
        "provider_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "provider_memo": "",
        "fee": "1425.954",
        "narration": null,
        "hash": null,
        "name": "Kotani",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": null,
        "auto_id": 1,
        "service_code": "MOBILE_MONEY",
        "service_name": "MOBILE MONEY",
        "country": "UG",
        "currency": "UGX",
        "provider_type": "mobile"
    }
}
```

## Cancel Quote
Cancel a quote request.

**Method:** GET  
**Endpoint:** `/accounts/cancelQuote/{id}`

**Response Example:**
```json
{
    "status": 200,
    "message": "Quote cancelled"
}
```

## Get Pending Quotes
Retrieve all pending quotes for the authenticated account.

**Method:** GET  
**Endpoint:** `/accounts/getPendingQuotes`

**Response Example:**
```json
[
  {
    "quote_id": "q1234567890",
    "send_asset": "USDT",
    "receive_currency": "UGX",
    "send_amount": 100,
    "receive_amount": 370500,
    "status": "PENDING",
    "created_at": "2024-05-16T12:00:00Z"
  },
  {
    "quote_id": "q0987654321",
    "send_asset": "USDC",
    "receive_currency": "KES",
    "send_amount": 50,
    "receive_amount": 6500,
    "status": "PENDING",
    "created_at": "2024-05-16T12:05:00Z"
  }
]
```

## Payment Methods
See the Payment Methods section in the sidebar for details on adding, retrieving, and managing payment methods.
