---
id: get-quote
title: Get Quote
---

### Get a quote request
This endpoint to make a payment quote.

### Request
Method: GET 
```json
  {{URL}}/accounts/getTransaction/:Id
```
### Path parameters
Id: The quote Id 

#### Response raw (json)
```json
{
    "status": 100,
    "message": "success",
    "data": {
        "id": 74,
        "transId": "14dafec21cfd462eb273ff7f7f1becda",
        "provider_id": 2,
        "company_id": 8,
        "send_asset": "CUSD",
        "send_amount": "10",
        "receive_currency": "UGX",
        "receive_amount": 35576,
        "ex_rate": "3557.6205",
        "account_number": "+256776439250",
        "service_id": 1000,
        "receiver_address": "0x6B407778C199987EFbD6470e34050b5588959B00",
        "pay_in_status": "PENDING",
        "status": "PENDING",
        "sending_address": "0x8968cf62c9d951781065e4e18a9a40c08f7a6801",
        "response_body": null,
        "reason": null,
        "created_on": "2025-03-26T20:15:20.000Z",
        "bank_name": "",
        "bank_code": "",
        "provider_ref_id": "14dafec21cfd462eb273ff7f7f1becda",
        "provider_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "provider_memo": "",
        "fee": "1423.048",
        "narration": null,
        "hash": null,
        "name": "Kotani",
        "created_at": "2024-04-11T10:34:19.000Z",
        "approval_status": "active",
        "rates_endpoint": null,
        "auto_id": 1,
        "service_code": "MOBILE_MONEY",
        "service_name": "MOBILE MONEY",
        "country": "UG",
        "currency": "UGX",
        "provider_type": "mobile"
    }
}
```

```json
{
    "status": 203,
    "message": "Error on fetching quote"
}
```
