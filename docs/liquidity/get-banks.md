---
id: get-banks
title: Get Banks
sidebar_position: 4
---

# Get Banks

Get all available banks for a specific currency and country.

**Method:** GET  
**Endpoint:** `/v1/rail/accounts/banks`

**Query Parameters:**
- `currency`: Currency code (e.g., "NGN", "UGX", "KES", "ZAR")

**Request Example:**
```
GET /v1/rail/accounts/banks?currency=NGN
```

**Response Example:**
```json
[
    {
        "id": 26,
        "bank_code": "ACS",
        "name": "ACCESS BANK",
        "country": "NIGERIA",
        "country_code": "NG",
        "currency": "NGN",
        "data": null,
        "createdAt": null,
        "deletedAt": null,
        "updatedAt": null,
        "status": "ACTIVE"
    },
    {
        "id": 27,
        "bank_code": "110005",
        "name": "3Line Card Management Limited",
        "country": "NG",
        "country_code": "NGA",
        "currency": "NGN",
        "data": null,
        "createdAt": null,
        "deletedAt": null,
        "updatedAt": null,
        "status": "ACTIVE"
    },
    {
        "id": 28,
        "bank_code": "120001",
        "name": "9 Payment Service Bank",
        "country": "NG",
        "country_code": "NGA",
        "currency": "NGN",
        "data": null,
        "createdAt": null,
        "deletedAt": null,
        "updatedAt": null,
        "status": "ACTIVE"
    },
    {
        "id": 35,
        "bank_code": "044",
        "name": "Access Bank",
        "country": "NG",
        "country_code": "NGA",
        "currency": "NGN",
        "data": null,
        "createdAt": null,
        "deletedAt": null,
        "updatedAt": null,
        "status": "ACTIVE"
    },
    {
        "id": 729,
        "bank_code": "035",
        "name": "Wema Bank",
        "country": "Nigeria",
        "country_code": "NG",
        "currency": "NGN",
        "data": null,
        "createdAt": "2025-04-17 17:59:56",
        "deletedAt": null,
        "updatedAt": "2025-04-17 17:59:56",
        "status": "ACTIVE"
    },
    {
        "id": 735,
        "bank_code": "057",
        "name": "Zenith Bank",
        "country": "Nigeria",
        "country_code": "NG",
        "currency": "NGN",
        "data": null,
        "createdAt": "2025-04-17 17:59:56",
        "deletedAt": null,
        "updatedAt": "2025-04-17 17:59:56",
        "status": "ACTIVE"
    }
]
```

**Response Fields:**
- `id`: Unique bank identifier
- `bank_code`: Bank code used for transactions
- `name`: Bank name
- `country`: Country name
- `country_code`: ISO country code
- `currency`: Currency code
- `data`: Additional bank data (usually null)
- `createdAt`: Creation timestamp
- `deletedAt`: Deletion timestamp (null if active)
- `updatedAt`: Last update timestamp
- `status`: Bank status (ACTIVE/INACTIVE) 