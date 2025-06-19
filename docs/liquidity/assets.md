---
title: Assets
---

# Assets

Retrieve a list of supported assets (cryptocurrencies or tokens).

**Method:** GET  
**Endpoint:** https://api.muda.tech/v1/rail/accounts/assets

## Supported Assets

We support the following crypto assets:

- USDT (Ethereum)
- USDT (Binance Smart Chain / BSC)
- USDC (Stellar)
- cNGN (Binance Smart Chain / BSC)
- cNGN (Bantu Blockchain)

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