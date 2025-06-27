---
title: Add Address
---

# Add Address

Add a new blockchain address for payouts or collections.

**Method:** POST  
**Endpoint:** {{BASE_URL}}/v1/rail/accounts/addAddress

**Request Example:**
```json
{
  "address": "GANILKVETD47ETWB3CTGYWA7KEPNLN4R46D7G34VRAU6UTCIV5KEWOJF",
  "chain": "STELLAR"
}
```

**Response Example:**
```json
{
  "status": 200,
  "message": "Address added successfully",
  "data": {
    "address": "GANILKVETD47ETWB3CTGYWA7KEPNLN4R46D7G34VRAU6UTCIV5KEWOJF",
    "chain": "STELLAR"
  }
}
``` 