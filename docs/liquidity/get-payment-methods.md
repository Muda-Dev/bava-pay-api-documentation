---
title: Get Payment Methods
---

# Get Payment Methods

Retrieve all payment methods associated with an account.

**Method:** GET  
**Endpoint:** `{{BASE_URL}}`/v1/rail/accounts/getPaymentMethods

**Request Example:**
```
GET /accounts/getPaymentMethods
```

**Response Example:**
```json
[
  {
    "type": "mobile_money",
    "currency": "UGX",
    "phone_number": "+256711111111",
    "country_code": "KE",
    "network": "MTN",
    "account_name": "MBONYE EMMANUEL"
  }
]
``` 