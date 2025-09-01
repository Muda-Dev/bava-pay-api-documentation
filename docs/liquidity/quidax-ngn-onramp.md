---
id: quidax-ngn-onramp
title: Quidax NGN On-Ramp
sidebar_position: 15
---


## Important Notes

:::warning Account Name Matching
The **first name** and **last name** specified during company account creation **MUST MATCH** the bank account names used to make payments to the Quidax bank account. These names are used when initiating the on-ramp transaction and any mismatch will cause the transaction to fail.
:::

:::info Quote Expiry
On-ramp quotes expire in **30 minutes** from confirmation. Users must complete their bank transfer within this timeframe.
:::



## Generate On-Ramp Quote

Create a transaction quote that will provide bank details for NGN payment.

**Method:** POST  
**Endpoint:** `/accounts/generateQuote`

**Request Body:**
```json
{
    "service_id": 1008,
    "provider_id": 4,
    "reference_id": "REF9876543268",
    "transaction_type": "on_ramp",
    "asset_code": "USDT",
    "company_id": 22,
    "send_asset": "NGN",
    "send_amount": "5000",
    "receive_currency": "USDT",
    "receiver_address": "TLwDz6xVFhiXB2UDGVutDdKeStYzNZMmDe",
    "network": "trc20",
    "payment_method_id": "19a5dcfa60afb4fa08f7ce36c91e12f47"
}
```



**Response Example:**
```json
{
    "status": 200,
    "message": "On-ramp initiated successfully",
    "data": {
        "transaction_id": "f62e57c7c20f4ca29c606e8f13683e0p",
        "quidax_reference": "03f641ef-8dc9-4b2e-8d43-7a11995b8e54",
        "from_amount": "5000",
        "to_amount": 0.93,
        "from_currency": "NGN",
        "to_currency": "USDT",
        "payment_instructions": {
            "public_id": "62389df6-9af0-47aa-a7c3-d646b62006fe",
            "account_name": "Korapay-emmanuel user",
            "account_number": "5220731318",
            "bank_name": "Sterling bank",
            "bank_code": "232",
            "reference": "BANK_ACCOUNT_955b343e9d66bd88",
            "amount": "5000.0",
            "amount_expected": "5080.63",
            "created_at": "2025-08-28T08:50:24.480Z",
            "updated_at": "2025-08-28T08:50:24.480Z",
            "processor_fee": "75.0",
            "vat": "5.63"
        },
        "status": "PENDING_PAYMENT",
        "expires_at": "2025-08-29 08:50:24"
    }
}
```



## Error Handling

Common error scenarios and their meanings:

### Invalid Amount
```json
{
    "status": 203,
    "message": "Invalid amount",
    "data": null
}
```
The amount is below minimum or above maximum limits.



