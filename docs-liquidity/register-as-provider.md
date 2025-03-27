---
id: register-as-provider
title: Provider Registration
---


### Create Provider Account

Before running the server as a provider, you need to create an account at:

[Liquidity Rail Registration](https://liquidityrail.com/register)

During registration, choose the option to become a provider.

To create an account, send the following parameters to the below endpoint. Set `user_type` field as `provider` when creating the account.

```json
  {{URL}}/accounts/register
```

#### Body raw (json)
```json
  {
    "full_name": "John Doe",
    "business_name": "Muda Ltd",
    "phone_number": "07012345678",
    "email": "info@muda.techh",
    "password": "testpassword",
    "currencies": ["UGX","KES"],
    "assets": ["USDT","CUSD"],
    "user_type":"provider"
 }
```

#### Response raw (json)
```json
{
    "status": 100,
    "message": "Company added successfully"
}
```
```json
{
    "status": 203,
    "message": "Missing required fields"
}
```

