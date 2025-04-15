---
sidebar_position: 1
---

# Introduction

This document provides information about the Muda Payments API endpoints that are available for third-party integration. The API allows you to process **payments**, **check balances**, and **manage transactions**.

---

## Authentication

The Auth Token method is used to authenticate a client to the New Age platform. The client provides their secret key and API key to receive an access token. This token is used for subsequent requests to the platform.

All API requests (except for login) require authentication using a JWT token. The token should be included in the `Authorization` header as a Bearer token.

```
Authorization: Bearer <your_jwt_token>
```

### Generating the `your_jwt_token`

To generate the JWT token, make a `POST` request to the authentication endpoint with your `secret_key` and `api_key`.

**Request:**

```
POST /auth/token
Content-Type: application/json
```

```json
{
    "secret_key": "test_sec-7f5b18a1-ee43-45d1-b9c4-cd1defeae407b21a3d0c-74f5-4df2-bf6b-01488a1a59f9",
    "api_key": "test_key-9f732779-6345-4bd4-9344-662c5b6ac516"
}
```

**Response:**

- **Status Code:** `200 OK`

```json
{
    "status": 200,
    "message": "success",
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6MTAzMDI1NzEsImFwaUtleSI6InRlc3Rfa2V5LTlmNzMyNzc5LTYzNDUtNGJkNC05MzQ0LTY2MmM1YjZhYzUxNiIsInVzZXIiOiJBUEkiLCJpYXQiOjE3NDQ3MzYwNDUsImV4cCI6MTc0NDc3OTI0NX0.zWA2Q6L4FyDKCEOCz-0GfG2wDEW_9fYLLDnx_QZ2MN0",
        "token_type": "Bearer",
        "expires_in": 7200
    }
}
```

Use the `access_token` from the response as your `your_jwt_token` in subsequent API requests.

---

### Status Codes

Here are the possible status codes for the authentication endpoint:

- **200 OK**: The request was successful, and the access token was generated.
- **400 Bad Request**: The request was invalid or missing required parameters.
- **401 Unauthorized**: The provided `secret_key` or `api_key` is incorrect.
- **403 Forbidden**: The client does not have permission to access the resource.
- **500 Internal Server Error**: The server encountered an error while processing the request.

---

## Base URL

```
https://api.muda.com/payment
```