---
id: liquidity-readme
title: Liquidity Rail Documentation
sidebar_position: 0
---

# Liquidity Rail API Documentation

This section contains the complete documentation for the Muda Liquidity Rail API, organized to match the Postman collection structure.

## Documentation Structure

The Liquidity Rail API documentation is organized into two main sections:

### Client Side
Endpoints for clients to interact with the liquidity rail system:

- **Assets Management**: Get available assets and services
- **Provider Discovery**: Find and select service providers  
- **Rate Management**: Get exchange rates and book quotes
- **Transaction Management**: Create and track transactions

### Provider Side
Endpoints for external service providers to integrate with the liquidity rail:

- **Rate Endpoints**: Provide real-time exchange rates
- **Quote Management**: Generate and confirm transaction quotes
- **Transaction Tracking**: Monitor transaction status
- **Webhook Integration**: Send status updates to the platform

## Key Features

### Authentication
All API requests require JWT token authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Response Format
All API responses follow a consistent format:

```json
{
    "status": 200,
    "message": "success",
    "data": { /* response data */ }
}
```

### Error Handling
The API uses standard HTTP status codes and provides detailed error messages in the response body.

## Getting Started

1. **Authentication**: Start by authenticating to get your JWT token
2. **Service Discovery**: Get available services and providers
3. **Rate Management**: Get exchange rates and book quotes
4. **Transaction Processing**: Create and track transactions

## API Base URL

```
https://rail.stage-mudax.xyz/
```

## Postman Collection

This documentation is based on the official Postman collection available at:
https://documenter.getpostman.com/view/3143535/2sB34ijKF4

The collection includes:
- Complete request/response examples
- Authentication flows
- Error handling scenarios
- Webhook integration examples

## Support

For technical support or questions about the API, please contact the development team. 