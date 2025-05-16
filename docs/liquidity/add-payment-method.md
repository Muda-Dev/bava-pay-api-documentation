---
id: add-payment-method
title: Add Payment Method
---

### Add payment method 
Add a payment method

### Request
Method: POST
```json
  {{URL}}/accounts/addPaymentMethod
```

#### Body raw (json)
##### Body raw (json)[Phone Number]

```json
{
    "type": "mobile_money",
    "currency": "UGX",
    "phone_number": "+2567000000",
    "country_code": "UG",
    "network": "MTN",
    "account_name": "MBONYE EMMANUEL"
}
```

##### Body raw (json)[Bank Account]
```json
{ 
    "type":"bank",
    "currency":"GHS",
    "country_code":"UGANDA",
    "account_name":"0035345345",
    "bank_name":"ACCESS BANK LTD",
    "bank_code":"ACC",
    "account_number":"Joe Doe",
    "sort_code":"353",
    "swift_code":"3453VCCD"
}
```

#### Response raw (json)
```json
{
    "status": 200,
    "message": "Payment method added successfully",
    "data": {
        "kotani_customer_key": "",
        "currency": "GHS",
        "company_id": 8,
        "type": "bank",
        "bank_name": "ACCESS BANK LTD",
        "bank_code": "ACC",
        "account_number": "Joe Doe",
        "payment_method_id": "2360f953181a444a49ea7892889d263f9"
    }
}
```
```json
{
    "status": 203,
    "message": "Failed to add payment method"
}
```