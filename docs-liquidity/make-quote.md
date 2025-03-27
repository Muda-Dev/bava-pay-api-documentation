---
id: make-quote
title: Make Quote
---

### Make a quote request
Transaction Quote Request

### Request
Method: POST
```json
  {{URL}}/accounts/getInvoice
```
#### Body raw (json)
```json
  {
  "provider_id": "2",
  "send_asset": "USDC",
  "send_amount": 1,
  "account_number": "ACC987654321",
  "receive_currency": "UGX",
  "receive_amount": 3750.00,
  "service_id": "7",
  "chain":"STELLAR",
  "ex_rate": 3750.00,
  "receiver_address": "Kampala, Uganda",
  "payment_method_id": "1a95a475ec97147b0a51a2273f0bc94d1",
  "sending_address":"GANILKVETD47ETWB3CTGYWA7KEPNLN4R46D7G34VRAU6UTCIV5KEWOJF"
}
```

#### Response raw (json)
```json
{
    "status": 100,
    "message": "Transaction record saved",
    "data": "d523ad72c89940e5bb6091518c91c413"
}
```
```json
{
    "status": 203,
    "message": "Error on placing quote"
}
```
