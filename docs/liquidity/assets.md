---
title: Assets
---

# Assets

Retrieve a list of supported assets (cryptocurrencies or tokens).

**Method:** GET  
**Endpoint:** https://api.muda.tech/v1/rail/accounts/assets

**Request Example:**
```
GET /accounts/assets
```

**Response Example:**
```json
[
  {
    "asset_code": "USDT",
    "chain": "TRON",
    "decimals": 6
  },
  {
    "asset_code": "USDC",
    "chain": "ETH",
    "decimals": 6
  }
]
``` 