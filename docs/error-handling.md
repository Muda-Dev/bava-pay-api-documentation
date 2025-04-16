---
id: error-handling
title: Error Handling
---

# Error Handling

## Status Codes

All API endpoints return standard HTTP status codes. In case of an error, the response will include an error message and, if applicable, additional error details.

## Client Errors

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: Authentication is required or has failed.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server could not find the requested resource.
- **429 Too Many Requests**: The client has sent too many requests in a given amount of time (rate limiting).

Example error response:

```json
{
  "status": 404,
  "message": "Resource not found",
  "data": null
}
```

## Server Errors

- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.
- **502 Bad Gateway**: The server received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request, often due to maintenance or overload.
- **504 Gateway Timeout**: The server did not receive a timely response from the upstream server.

Example server error response:

```json
{
  "status": 500,
  "message": "An unexpected error occurred",
  "data": null
}
``` 