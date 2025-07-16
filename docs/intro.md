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
https://api.muda.tech/v1
```

---

# Muda Pay API Endpoints

## Get Products
Get available payment products and their configurations.

**Method:** GET  
**Endpoint:** `/v1/payment/products`

**Response Example:**
```json
{
    "status": 200,
    "message": "products",
    "data": [
        {
            "product_id": 10011,
            "product_name": "Mobile Money push",
            "product_code": "MOBILE_MONEY",
            "transaction_type": "PUSH",
            "status": "active",
            "currency": "UGX",
            "provider_fee": "1500.00",
            "fee_type": "FLAT",
            "fee_amount": "2000.0",
            "requires_extra_data": 0,
            "has_c_account": "no",
            "min_amount": 500,
            "max_amount": 2000000,
            "created_at": "2025-02-17T12:31:44.000Z"
        },
        {
            "product_id": 10012,
            "product_name": "Mobile Money pull",
            "product_code": "MOBILE_MONEY",
            "transaction_type": "PULL",
            "status": "active",
            "currency": "UGX",
            "provider_fee": "1.00",
            "fee_type": "PERCENTAGE",
            "fee_amount": "1.5",
            "requires_extra_data": 0,
            "has_c_account": "yes",
            "min_amount": 500,
            "max_amount": 2000000,
            "created_at": "2025-02-17T12:31:44.000Z"
        },
        {
            "product_id": 20011,
            "product_name": "INTERACT Payouts",
            "product_code": "INTERAC",
            "transaction_type": "PUSH",
            "status": "active",
            "currency": "CAD",
            "provider_fee": "2.00",
            "fee_type": "FLAT",
            "fee_amount": "2.0",
            "requires_extra_data": 1,
            "has_c_account": "no",
            "min_amount": 1,
            "max_amount": 2000000,
            "created_at": "2025-02-17T12:31:44.000Z"
        }
    ]
}
```

## Authentication
Get access token using API credentials.

**Method:** POST  
**Endpoint:** `/v1/clients/oauth/token`

**Request Example:**
```json
{
    "secret_key": "live_sec-ea22c631-6217-4bb5-8b52-5fe479c8fef44b63ee0a-cc65-4a41-a043-8aae0d5496dc",
    "api_key": "live_key-98abb870-15d6-4ff1-b113-8897fcf2ef98"
}
```

**Response Example:**
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6MTA4MTkwMzMsInVzZXJJZCI6ImxpdmVfa2V5LTk4YWJiODcwLTE1ZDYtNGZmMS1iMTEzLTg4OTdmY2YyZWY5OCIsImFwaUtleSI6ImxpdmVfa2V5LTk4YWJiODcwLTE1ZDYtNGZmMS1iMTEzLTg4OTdmY2YyZWY5OCIsInVzZXIiOiJBUEkiLCJyb2xlIjoiQVBJIiwiaWF0IjoxNzUyNjY4NDIwLCJleHAiOjE3NTI3MTE2MjB9._OxwJZiAksVQwB07tAPz024TagCluhQ6zMq7VSyBlmI",
        "token_type": "Bearer",
        "expires_in": 7200
    }
}
```

## Validate Request
Validate payment request before processing.

**Method:** POST  
**Endpoint:** `/v1/payment/validate-request`

**Request Example:**
```json
{
  "reference_id":"abc12345678990",
  "amount": 1000,
  "trans_type":"PUSH",
  "currency":"UGX",
  "product_id":"10012",
  "account_number":"256787719618"
}
```

## Direct Payout
Send money to a recipient.

**Method:** POST  
**Endpoint:** `/v1/payment/direct-payout`

**Request Example:**
```json
{
    "reference_id": "1234596789454380r06043459",
    "amount": 5,
    "trans_type": "PUSH",
    "currency": "CAD",
    "product_id": 20011,
    "account_number": "mbonyeemma@myfx.ca",
    "extra_data": {
        "interact_email": "mbonyeemma@myfx.ca",
        "interact_name": "mbonye emmanuel"
    }
}
```

**Response Example:**
```json
{
    "status": 400,
    "message": "Insufficient balance"
}
```

## Direct Collection
Pull money from an account.

**Method:** POST  
**Endpoint:** `/v1/payment/direct-collection`

**Request Example:**
```json
{
    "reference_id": "mda734596745430r064359",
    "amount": 1000,
    "trans_type": "PULL",
    "currency": "UGX",
    "product_id": 10012,
    "account_number": "256704243736",
    "phone":"256787719618",
    "extra_data": {
        "interact_email": "cashtella@myfx.ca",
        "interact_name": "cashtella"
    }
}
```

**Response Example:**
```json
{
    "status": 200,
    "message": "Transaction created successfully",
    "data": {
        "trans_id": "2e223585-8e65-4c9d-9f2a-caa7bd04faed",
        "reference_id": "mda734596745430r064359"
    }
}
```

## Get Transaction by Reference ID
Get transaction details using reference ID.

**Method:** GET  
**Endpoint:** `/v1/payment/transactionReferenceId/{reference_id}`

**Response Example:**
```json
{
    "status": 200,
    "message": "success",
    "data": {
        "trans_id": "2e223585-8e65-4c9d-9f2a-caa7bd04faed",
        "client_id": "10368890",
        "service_name": "MOBILE_MONEY",
        "product_id": "10012",
        "trans_type": "PULL",
        "reference_id": "ynwgvEdi7G",
        "amount": "500.00",
        "currency": "UGX",
        "sender_account": "256787719618",
        "receiver_account": "10368890",
        "status": "SUCCESS",
        "fee": "10.00",
        "created_at": "2025-06-27T09:07:10.000Z",
        "narration": "c946821a-72bb-4637-baaf-923c20148a8d"
    }
}
```

---

# Liquidity Rail API Endpoints

## Get All Services
Get enabled services information.

**Method:** GET  
**Endpoint:** `/accounts/services`

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

## Get Rate
Get currency pairs exchange rate.

**Method:** POST  
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
**Endpoint:** `/accounts/providers`

**Request Example:**
```json
{
  "asset_code":"USDT",
  "currency":"UGX",
  "company_id":22
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

## Generate Quote
Request a transaction quote.

**Method:** POST  
**Endpoint:** `/accounts/generateQuote`

**Request Example:**
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
