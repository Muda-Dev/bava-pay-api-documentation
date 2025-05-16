---
id: balances
title: Balances
---


### Get wallet balances
This endpoint retrieves the account information for the specified account address.

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
