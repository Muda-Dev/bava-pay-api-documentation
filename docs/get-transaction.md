---
id: get-transaction
title: Get Transaction
sidebar_position: 7
---

# Get Transaction

Get details of a specific transaction by its reference ID.

**Method:** GET  
**Endpoint:** `/v1/payment/transactionReferenceId/{referenceId}`

**Path Parameters:**
- `referenceId`: The unique reference ID of the transaction

**Request Example:**
```
GET /v1/payment/transactionReferenceId/ynwgvEdi7G
```

**Response Example:**
```json
{
    "status": 200,
    "message": "Transaction retrieved successfully",
    "data": {
        "transaction_id": "tx123456789",
        "reference_id": "ynwgvEdi7G",
        "amount": 50000.00,
        "currency": "UGX",
        "status": "COMPLETED",
        "payment_method": "MOBILE_MONEY",
        "recipient": {
            "name": "John Doe",
            "phone": "+256774343545",
            "account_number": "0774343545"
        },
        "sender": {
            "name": "Jane Smith",
            "email": "jane@example.com"
        },
        "created_at": "2024-05-16T10:30:00Z",
        "completed_at": "2024-05-16T10:35:00Z",
        "fee": 1000.00,
        "total_amount": 51000.00,
        "description": "Payment for services",
        "metadata": {
            "order_id": "ORD123456",
            "customer_id": "CUST789"
        }
    }
}
```

**Response Fields:**
- `transaction_id`: Internal transaction identifier
- `reference_id`: External reference ID used for the transaction
- `amount`: Transaction amount
- `currency`: Currency code
- `status`: Transaction status (PENDING, PROCESSING, COMPLETED, FAILED)
- `payment_method`: Method used for payment
- `recipient`: Recipient details
- `sender`: Sender details
- `created_at`: Transaction creation timestamp
- `completed_at`: Transaction completion timestamp
- `fee`: Transaction fee
- `total_amount`: Total amount including fees
- `description`: Transaction description
- `metadata`: Additional transaction metadata

**Error Response:**
```json
{
    "status": 404,
    "message": "Transaction not found",
    "error": "TRANSACTION_NOT_FOUND"
}
``` 