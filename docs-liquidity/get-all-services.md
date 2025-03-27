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
  {{URL}}/account/{{id}}
```

#### Response raw (json)
```json
{
    "status":100,
    "message":"Wallet balances",
    "data":{
        "wallet_id":8
    }
}
```
```json
{
    "status": 203,
    "message": "Balance not found"
}
```
