---
id: update-profile
title: Update Profile
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
    "message":"Account detail",
    "data":{
        "company_id":8,
        "name":"Paul Doe",
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
