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
    "currency": "UGX"
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

## 2.1 Single Provider

Get a single provider for a specific asset and currency.

**Method:** POST  
**Endpoint:** `/accounts/single-provider`

**Request Body:**
```json
{
    "asset_code": "USDT",
    "currency": "UGX"
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
    "service_code": "BANK_TRANSFER"
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
    "source": "exchange"
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
    "sending_address": "TXYZabc1234567890address"
}
```