---
title: Banks
---

# Banks

Retrieve a list of supported banks for a given currency.

**Method:** GET  
**Endpoint:** {{BASE_URL}}/v1/rail/accounts/banks?currency=KES

**Request Example:**
```
GET /accounts/banks?currency=KES
```

**Response Example:**
```json
[
  {
    "bank_code": "001",
    "bank_name": "Equity Bank",
    "country": "KE",
    "currency": "KES"
  },
  {
    "bank_code": "002",
    "bank_name": "KCB Bank",
    "country": "KE",
    "currency": "KES"
  }
]
``` 