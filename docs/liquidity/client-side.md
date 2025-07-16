---
id: client-side
title: Client Side
sidebar_position: 2
---

# Client Side Endpoints

The Client Side endpoints allow clients to interact with the Liquidity Rail system for asset management, provider discovery, rate management, and transaction processing.

## 1.0 Get Assets

Get available assets for a specific currency and service.

**Method:** GET  
**Endpoint:** `/accounts/getAssets`

**Query Parameters:**
- `q`: Query parameter (optional)

**Request Body:**
```json
{
    "amount": 400,
    "currency": "UGX",
    "asset_code": "USDT",
    "service_code": "MOBILE_MONEY"
}
```

## 1.1 Get Services

Get all available services for a specific asset and currency.

**Method:** GET  
**Endpoint:** `/accounts/services`

**Request Body:**
```json
{
    "asset_code": "USDT",
    "currency": "UGX",
    "company_id": 22
}
```

**Response Example:**
```json
[
    {
        "provider_service_id": 1,
        "service_id": 1000,
        "provider_id": 1,
        "min_amount": 10,
        "max_amount": 5000000,
        "name": "Muda Ltd",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": "https://dev-api.muda-v2.com/getRate",
        "auto_id": 1,
        "service_code": "MOBILE_MONEY",
        "service_name": "MOBILE MONEY",
        "country": "UG",
        "currency": "UGX",
        "provider_type": "mobile"
    }
]
```

## 1.2 Get Service

Get details of a specific service by ID.

**Method:** GET  
**Endpoint:** `/accounts/service/{service_id}`

**Request Body:**
```json
{
    "asset_code": "USDT",
    "currency": "UGX",
    "company_id": 22
}
```

## 2.0 Get All Providers

Get all available providers for a specific asset and currency.

**Method:** POST  
**Endpoint:** `/accounts/providers`

**Request Body:**
```json
{
    "asset_code": "USDT",
    "currency": "UGX",
    "company_id": 22
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

## 2.1 Single Provider

Get a single provider for a specific asset and currency.

**Method:** POST  
**Endpoint:** `/accounts/single-provider`

**Request Body:**
```json
{
    "asset_code": "USDT",
    "currency": "UGX",
    "company_id": 22
}
```

## 2.2 Get All Providers By Service

Get all providers for a specific service.

**Method:** POST  
**Endpoint:** `/accounts/providers`

**Request Body:**
```json
{
    "asset_code": "USDT",
    "currency": "UGX",
    "service_code": "BANK_TRANSFER",
    "company_id": 22
}
```

## 3.0 Get Rate

Get exchange rate for a specific amount and currency pair.

**Method:** POST  
**Endpoint:** `/accounts/getRate`

**Request Body:**
```json
{
    "amount": 10,
    "currency": "ZAR",
    "asset_code": "USDT",
    "provider_id": 2
}
```

**Response Example:**
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "from": "USDT",
        "to": "ZAR",
        "value": 150.50,
        "fiatAmount": 150.50,
        "transactionAmount": "148.75",
        "cryptoAmount": 10,
        "fee": "1.75"
    }
}
```

## 3.1 Book Rate

Book an exchange rate for a specific transaction.

**Method:** POST  
**Endpoint:** `/accounts/bookRate`

**Request Body:**
```json
{
    "asset_code": "USDC_BSC",
    "amount": 3,
    "currency": "KES",
    "service_code": "MOBILE_MONEY",
    "provider_id": 2,
    "source": "exchange"
}
```

**Response Example:**
```json
{
    "status": 200,
    "message": "Rate booked successfully",
    "data": {
        "quote_id": "md7826207aa0ff47cca22dd5d468ad40be",
        "rate": 150.50,
        "expires_at": "2024-05-16T12:30:00Z"
    }
}
```

## 3.2 Confirm Rate

Confirm a booked rate and create a transaction.

**Method:** POST  
**Endpoint:** `/accounts/confirmBookedRate`

**Request Body:**
```json
{
    "quote_id": "md7826207aa0ff47cca22dd5d468ad40be",
    "reference_id": "44343",
    "payment_method_id": "103382b71a39341f18c05d8fa86476efc",
    "sending_address": "0x1a2b3c4d5e6f7g8h9i0j",
    "source": "exchange",
    "company_id": "34"
}
```

**Response Example:**
```json
{
    "status": 200,
    "message": "Transaction confirmed",
    "data": {
        "transaction_id": "tx123456789",
        "status": "PENDING"
    }
}
```

## 3.3 Generate Direct Quote

Generate a direct quote for a transaction.

**Method:** POST  
**Endpoint:** `/accounts/generateQuote`

**Request Body:**
```json
{
    "provider_id": 1,
    "reference_id": "REF987654321",
    "asset_code": "USDT",
    "receive_currency": "UGX",
    "send_amount": 400.0,
    "service_id": 1000,
    "payment_method_id": "103382b71a39341f18c05d8fa86476efc",
    "source": "exchange",
    "sending_address": "TXYZabc1234567890address",
    "company_id": 2
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

## 4.0 Get Transaction

Get details of a specific transaction.

**Method:** GET  
**Endpoint:** `/accounts/getTransaction/{id}`

**Request Body:**
```json
{
    "asset": "USDT",
    "currency": "UGX",
    "service_code": "MOBILE_MONEY"
}
```

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
        "receive_amount": 35576,
        "ex_rate": "3557.6205",
        "account_number": "+256774343545",
        "service_id": 1000,
        "receiver_address": "0x6B407778C199987EFbD6470e34050b5588959B00",
        "pay_in_status": "PENDING",
        "status": "PENDING",
        "sending_address": "0x8968cf62c9d951781065e4e18a9a40c08f7a6801",
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

## 4.1 Get Transactions

Get all transactions for the authenticated account.

**Method:** GET  
**Endpoint:** `/accounts/getTransactions`

**Request Body:**
```json
{
    "asset": "USDT",
    "currency": "UGX",
    "service_code": "MOBILE_MONEY"
}
```

**Response Example:**
```json
[
    {
        "id": 72,
        "transId": "d523ad72c89940e5bb6091518c91c413",
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
``` 