---
id: payments
title: Payments
---

# Get Transaction by Reference ID APIs

This section contains API details for **Get Transaction by Reference ID**.

### 1. GET `{{BASE_URL}}`/payment/transactionReferenceId/XCVrBH7654BV6B9V

**Description:**  
Fetch transaction details by reference ID.

### Response Example:
```json
{
  "status": 200,
  "message": "Transactions fetched successfully",
  "data": [
    {
      "id": 1,
      "client_id": "10819033",
      "validation_id": "10949694",
      "product_id": "10000",
      "trans_type": "PULL",
      "trans_id": "7e4ebba4-b780-42b1-a112-c9c9f9ed8642",
      "reference_id": "3233232323039",
      "stellar_tx_id": null,
      "amount": "2000.0000000",
      "asset_code": "cUGX",
      "currency": "UGX",
      "sender_account": "GBPREREREREOOPOPOOREOPREOREOPROPROEROP",
      "receiver_account": "256711111111",
      "memo": "7e4ebba4-b780-42b1-a112-c9c9f9ed8642",
      "status": "SUCCESS",
      "created_at": "2025-02-20T16:22:55.000Z"
    }
  ]
}
```
