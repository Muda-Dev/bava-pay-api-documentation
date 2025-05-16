---
id: get-providers
title: Get Providers
---

### Get payment transaction 
Get a list of available service providers.

### Request
Method: POST
```json
  {{URL}}/accounts/provider
```
#### Body raw (json)
```json
 {
    "asset":"USDT",
    "currency":"UGX"
}
```

#### Response raw (json)
```json
 [
    {
        "provider_service_id": 1,
        "service_id": 1000,
        "provider_id": 1,
        "min_amount": 0,
        "max_amount": 100000,
        "name": "Muda Ltd",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": "https://dev-api.muda-v2.com/getRate",
        "auto_id": 1,
        "service_code": "MOBILE_MONEY",
        "service_name": "MOBILE MONEY",
        "country": "UG",
        "currency": "UGX",
        "provider_type": "mobile",
        "rate": 3712.03
    }
]
```
```json
{
    "status": 203,
    "message": "Failed to fetch providers"
}
```
