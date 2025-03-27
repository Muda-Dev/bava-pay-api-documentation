---
id: provider-information
title: Provider Information
---



### Get Provider Details
This endpoint allows you to retrieve provider information by making an HTTP POST request to the specified URL.

### Authorization Bearer Token
This request is using an authorization helper from collection Liquidity Rail

### Request
Method: GET
The request should include the following parameters in the JSON format:
providerId: (string) The ID of the provider for which information is to be retrieved.

```json
  {{URL}}/accounts/getProviderInfo
```

#### Response raw (json)
```json
{
    "status":100,
    "message":"Provider Details",
    "data":{
        "providerName":"",
        "providerType":"",
        "providerLocation":""
    }
}
```
```json
{
    "status": 203,
    "message": "Provider details not found"
}
```
