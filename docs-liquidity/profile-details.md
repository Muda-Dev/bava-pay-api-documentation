---
id: profile-details
title: Profile Details
---

### Get account details
This endpoint retrieves the account information for the user account.

### Request
Method: GET
Paramaters: id for the profile id

```json
  {{URL}}/account/get_profile/{{id}}
```

#### Response raw (json)
```json
{
    "status":100,
    "message":"Account balances",
    "data":{
        "company_id":8,
        "name":"Paul Doe",
        "business_name":null,
        "email":"paul@muda.tech",
        "phone":"+256772342342",
        "currencies": [],
        "assets": [],
        "user_type":"client"
    }
}
```
```json
{
    "status": 203,
    "message": "account not found"
}
```
