---
id: get-rate
title: Get Rate
---

### Get rate request
Get currency pairs exchange rate.

### Request

Method: GET
```json
  {{URL}}/accounts/getRate
```
#### Body raw (json)
```json
  {
    "symbol": "USDT",
    "currency": "KES",
    "amount": 300,
    "provider_id": 1
}
```

#### Response raw (json)
```json
{
    "status": 100,
    "message": "success",
    "data": {
        "from": "USDT",
        "to": "KES",
        "value": 39209.67,
        "fiatAmount": 39209.67,
        "transactionAmount": "38821.46",
        "cryptoAmount": 300,
        "fee": "388.21"
    }
}
```
```json
{
    "status": 203,
    "message": "Error getting rate"
}
```
