---
id: provider-transactions
title: Transaction Management
sidebar_position: 3
---

# Transaction Management

Endpoints for tracking and managing transactions with comprehensive pay-in and payout data.

## 1. Get Transaction

Get complete transaction details including both pay-in (crypto) and payout (fiat) information.

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

## 2. Get All Transactions

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

## Transaction Data Structure

### Transaction Metadata
- `transaction_id`: Unique transaction identifier
- `quote_id`: Reference to the original quote
- `provider_id`: Provider identifier
- `status`: Overall transaction status (PENDING, SUCCESS, FAILED)
- `created_on`: Transaction creation timestamp
- `from_currency`: Source currency (crypto)
- `to_currency`: Destination currency (fiat)
- `from_amount`: Source amount
- `to_amount`: Destination amount
- `transaction_type`: Transaction type (offramp, onramp)

### Coin Transaction (Crypto Received)
- `status`: Transaction status (PENDING, SUCCESS, FAILED)
- `amount`: Crypto amount received (string)
- `chain`: Blockchain network (BSC, STELLAR, TRON, etc.)
- `hash`: Transaction hash
- `from_address`: Sender's crypto address
- `to_address`: Provider's crypto address
- `asset_code`: Crypto asset (USDC, USDT, etc.)
- `fee`: Transaction fee (string)

### Fiat Transaction (Fiat Sent)
- `status`: Payout status (SUCCESS, PENDING, FAILED)
- `amount`: Fiat amount sent (string)
- `amount_delivered`: Actual amount delivered to recipient (number)
- `currency`: Fiat currency (UGX, USD, etc.)
- `reference_id`: Provider's reference ID
- `fee`: Payout fee (string)
- `account`: Payment account details (BankPayment | MobileMoneyPayment)

## Transaction Status Flow

1. **PENDING**: Transaction created, waiting for crypto receipt
2. **CRYPTO_RECEIVED**: Crypto assets received, processing payout
3. **SUCCESS**: Both crypto received and fiat delivered
4. **FAILED**: Transaction failed at any stage 