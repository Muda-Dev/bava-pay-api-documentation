---
title: Get Payment Method For Currency
---

# Get Payment Method For Currency

Retrieve payment methods for a specific currency.

**Method:** GET  
**Endpoint:** https://api.muda.tech/v1/rail/accounts/getPaymentMethodForCurrency/UGX

**Request Example:**
```
GET /accounts/getPaymentMethodForCurrency/UGX
```

**Response Example:**
```json
[
  {
    "type": "mobile_money",
    "currency": "UGX",
    "phone_number": "+256787719618",
    "country_code": "KE",
    "network": "MTN",
    "account_name": "MBONYE EMMANUEL"
  }
]
``` 