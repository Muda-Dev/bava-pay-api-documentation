---
id: provider-authentication
title: Provider Authentication
---


### Provider Authentication

Provider authentication ensures secure access to our API by verifying the identity of service providers.

Each request must include valid API credentials to authenticate and authorize access. These credentials should be sent in the request body.

Failure to provide valid authentication will result in access being denied, with an appropriate error response indicating the issue.

```json
  {{URL}}/account/login
```

#### Body raw (json)
```json
  {
    "email": "paul@muda.tech",
    "password": "password"
 }
```

#### Response raw (json)
```json
{
    "status":100,
    "message":"Login successful",
    "data":{
        "company_id":8,
        "name":"paul doe",
        "business_name":null,
        "email":"paul@muda.tech",
        "phone":"+256772342342","password":"eee202edf6d1fcdd71f39d3284f79b8f4ca2c4fcbd4b1a5896f92445d717a580",
        "currencies":"",
        "assets":"",
        "user_type":"provider",
        "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJjb21wYW55X2lkIjo4LCJpYXQiOjE3NDE0NDY0NDksImV4cCI6MTc0MTUzMjg0OX0._GFUMURNK0QEFrj0HScvhOrN2Q53sJtTv92NsnO3NU0"
    }
}
```
```json
{
    "status": 203,
    "message": "User not found"
}
```


