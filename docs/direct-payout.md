---
id: 7
title: Direct Payout
---

# Direct Payout API

Initiates a direct payout transaction to transfer funds to a specified account.

- **URL**: `/v1/payment/direct-payout`
- **Method**: `POST`
- **Auth Required**: Yes
- **Request Body**:
  ```json
  {
    "reference_id": "e024d94f979f46e7acf51b1ab0bf6282124",
    "amount": 1000,
    "trans_type": "PUSH",
    "currency": "UGX",
    "product_id": 10011,
    "account_number": "256787719618",
    "extra_data":{}
  }
  ```
- **Success Response**:
  ```json
  {
    "status": 201,
    "message": "Transaction initiated successfully",
    "data": {
      "trans_id": "e024d94f979f46e7acf51b1ab0bf6282124",
      "amount": 1000,
      "currency": "UGX",
      "status": "pending",
      "account_number": "256787719618"
    }
  }
  ```
- **Error Response**:
  ```json
  {
    "status": 400,
    "message": "Invalid request",
    "data": {
      "error": "Invalid account number or insufficient funds"
    }
  }
  ``` 