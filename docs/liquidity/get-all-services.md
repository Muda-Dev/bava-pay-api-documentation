---
id: get-all-services
title: Get All Services
---

### Get services
The Services API provides access to enabled services information

### Request
Method: GET
Paramaters: id for the wallet id

```json
  {{URL}}/accounts/services
```

#### Response raw (json)
```json
[
    {
        "provider_service_id": 1,
        "service_id": 1000,
        "provider_id": 1,
        "min_amount": 10,
        "max_amount": 5000000,
        "name": "Muda Ltd",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": "https://dev-api.muda-v2.com/getRate",
        "auto_id": 1,
        "service_code": "MOBILE_MONEY",
        "service_name": "MOBILE MONEY",
        "country": "UG",
        "currency": "UGX",
        "provider_type": "mobile"
    },
    {
        "provider_service_id": 2,
        "service_id": 1001,
        "provider_id": 2,
        "min_amount": 1000,
        "max_amount": 500000,
        "name": "Kotani",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": "https://dev-api.muda-v2.com/getRate",
        "auto_id": 5,
        "service_code": "MOBILE_MONEY",
        "service_name": "MPESA",
        "country": "KE",
        "currency": "KES",
        "provider_type": "mobile"
    },
    {
        "provider_service_id": 3,
        "service_id": 1002,
        "provider_id": 2,
        "min_amount": 2000,
        "max_amount": 100000,
        "name": "Kotani",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": "https://dev-api.muda-v2.com/getRate",
        "auto_id": 6,
        "service_code": "BANK_TRANSFER",
        "service_name": "BANK TRANSFER",
        "country": "SA",
        "currency": "ZAR",
        "provider_type": "bank"
    },
    {
        "provider_service_id": 34,
        "service_id": 1005,
        "provider_id": 4,
        "min_amount": 20000,
        "max_amount": 300000,
        "name": "Quidax",
        "created_at": "2025-03-11T13:32:53.000Z",
        "approval_status": "active",
        "rates_endpoint": null,
        "auto_id": 10,
        "service_code": "BANK_TRANSFER",
        "service_name": "BANK TRANSFER",
        "country": "NGN",
        "currency": "NGN",
        "provider_type": "bank"
    },
    {
        "provider_service_id": 35,
        "service_id": 1006,
        "provider_id": 4,
        "min_amount": 20000,
        "max_amount": 100000,
        "name": "Quidax",
        "created_at": "2025-03-11T13:32:53.000Z",
        "approval_status": "active",
        "rates_endpoint": null,
        "auto_id": 12,
        "service_code": "BANK_TRANSFER",
        "service_name": "BANK TRANSFER",
        "country": "XAF",
        "currency": "XAF",
        "provider_type": "bank"
    },
    {
        "provider_service_id": 38,
        "service_id": 1007,
        "provider_id": 1,
        "min_amount": 20000,
        "max_amount": 50000,
        "name": "Muda Ltd",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": "https://dev-api.muda-v2.com/getRate",
        "auto_id": 13,
        "service_code": "BANK_TRANSFER",
        "service_name": "BANK TRANSFER",
        "country": "XOF",
        "currency": "XOF",
        "provider_type": "bank"
    }
]
```
```json
{
    "status": 203,
    "message": "services not found"
}
```
