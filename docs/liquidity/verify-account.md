---
title: Verify Account
---

# Verify Account

Verify a bank account or mobile money account for payouts.

**Method:** POST  
**Endpoint:** {{URL}}v1/rail/accounts/verifyAccount

**Request Example:**
```json
{
  "provider_type": "bank",
  "bank_code": "001",
  "account_number": "1234567890",
  "currency": "NGN"
}
```

**Response Example:**
```json
{
  "status": 200,
  "message": "Account verified successfully",
  "data": {
    "account_name": "John Doe",
    "bank_code": "001",
    "account_number": "1234567890",
    "currency": "NGN"
  }
}
``` 