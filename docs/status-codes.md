---
title: Status Codes
---

# Status Codes

The Muda Pay API uses standard HTTP status codes in its responses. Below are the most common codes you will encounter:

- **200 Success**: The request was successful and the response contains the requested data.
- **201 Created**: The request was successful and a new resource was created.
- **202 Transaction Pending**: The request was successful and transaction is pending.
- **210 Verification required**: Transaction on hold and requires verification.
- **400 Bad Request**: Validation error.
- **401 Unauthorized**: Authentication failed or was not provided.
- **403 Forbidden**: The request is understood, but it has been refused or access is not allowed.
- **404 Not Found**: The requested resource could not be found.
- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource.
- **422 Unprocessable Entity**: The request was well-formed but was unable to be followed due to semantic errors.
- **429 Too Many Requests**: Rate limiting has been applied.
- **500 Internal Server Error**: An error occurred on the server.

## Example Response Format
```json
{
  "status": 200,
  "message": "Success",
  "data": { /* response data */ }
}
``` 