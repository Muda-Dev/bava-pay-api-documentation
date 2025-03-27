---
id: get-payout-transaction
title: Get Payout Transaction
---

### Get payment transaction 
Get the transaction details.

### Request
Method: GET
Paramaters: id for the transaction id

```json
  {{URL}}/accounts/getTransaction/{{id}}
```

#### Response raw (json)
```json
{
    "status": 100,
    "message": "success",
    "data": {
        "id": 72,
        "transId": "d523ad72c89940e5bb6091518c91c413",
        "provider_id": 2,
        "company_id": 30,
        "send_asset": "CUSD",
        "send_amount": "10",
        "receive_currency": "UGX",
        "receive_amount": 35649,
        "ex_rate": "3564.8858",
        "account_number": "+256774343545",
        "service_id": 1000,
        "receiver_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "pay_in_status": "PENDING",
        "status": "PENDING",
        "sending_address": "0x8968cf62c9d951781065e4e18a9a40c08f7a6888",
        "response_body": null,
        "reason": null,
        "created_on": "2025-03-25T12:26:53.000Z",
        "bank_name": "",
        "bank_code": "",
        "provider_ref_id": "d523ad72c89940e5bb6091518c91c413",
        "provider_address": "0x6B407778C199987EFbD6470e34050b5588959B5d",
        "provider_memo": "",
        "fee": "1425.954",
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
    "message": "Tranaction not found"
}
```


