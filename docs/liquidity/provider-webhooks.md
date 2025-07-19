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

### Crypto Received (Pay-in Transaction)
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
        "fee": "0.0001",
        "currency": "USDC"
    }
}
```

### Fiat Sent (Payout Transaction)
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