---
id: get-pending-quotes
title: Get Pending Quotes
---

# Get Pending Quotes

Retrieve all pending quotes for the authenticated account.

**Method:** GET  
**Endpoint:** `{{BASE_URL}}/v1/rail/accounts/getPendingQuotes`

**Request Example:**
```
GET /accounts/getPendingQuotes
```

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