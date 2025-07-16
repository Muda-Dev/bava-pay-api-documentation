---
id: provider-webhooks
title: Webhook Integration
sidebar_position: 4
---

# Webhook Integration

Providers must implement webhook endpoints to send status updates to MUDA's platform.

## Webhook Endpoint

**Method:** POST  
**Endpoint:** `https://api.muda.tech/v1/rail/accounts/events`

## Event Types

### Crypto Events
- `crypto_received`: When crypto assets are received
- `crypto_sent`: When crypto assets are sent
- `crypto_failed`: When crypto transaction fails

### Fiat Events
- `fiat_sent`: When fiat is sent to recipient
- `fiat_failed`: When fiat transaction fails
- `fiat_pending`: When fiat transaction is pending

### Transaction Events
- `transaction_created`: When a new transaction is created
- `transaction_updated`: When transaction status is updated
- `transaction_completed`: When transaction is completed
- `transaction_failed`: When transaction fails

## Example Webhooks

### Crypto Received
```json
{
    "eventType": "crypto_received",
    "provider_id": "stellar",
    "quote_id": "q1234567890",
    "data": {
        "amount": "100.00",
        "chain": "BSC",
        "hash": "7f3b8c9a6c8f49bcb91e5f9bce25d9ab234ed01d57cf20f8c2c7e123456789ab",
        "from_address": "GDRXE2BQUC3AZRF3UGVN7CMBKBCG66DO35F3X2TQFZ4FV5ZQYVQQVVKZ",
        "to_address": "GCFX5E6ZPNSHMRQ57SVKWBNUAWMRPDRW3PNUZYJH2MQWABYMWQ4QUCXT",
        "asset_code": "USDC",
        "contract_address": "GA5ZSEB7HPHWALX7Z5P67ZWBZKD6U4EL6C5PBPJNYMIPZYAD4TLSPUQX",
        "fee": "0.0001",
        "currency": "USDC",
        "memo": "deposit_ref_00123"
    }
}
```

### Fiat Sent
```json
{
    "eventType": "fiat_sent",
    "provider_id": "stellar",
    "status": "SUCCESS",
    "quote_id": "q1234567890",
    "data": {
        "amount": "50000.00",
        "amount_delivered": 5000,
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