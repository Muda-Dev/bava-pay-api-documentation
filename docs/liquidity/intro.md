---
sidebar_position: 1
---

# Liquidity Rail API

Welcome to the Muda Liquidity Rail API documentation. This section covers all endpoints for managing liquidity, payment methods, rates, quotes, and providers.

**Base URL:** `{{BASE_URL}}`/v1/rail/

Use this base URL for all endpoints described in this section.

## Introduction

The liquidity rail is a platform that enables users to easily convert stablecoins to fiat currency through an easy seamless and simple process. Our mission is to revolutionize cross-border payments and provide a robust solution for both individuals and enterprises.

This documentation presents all the service APIs that MUDA Liquidity Rail makes available.

## API Structure

The Liquidity Rail API is organized into two main sections:

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

## Authentication

All API requests require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Response Format

All API responses follow a consistent format:

```json
{
    "status": 200,
    "message": "success",
    "data": { /* response data */ }
}
```

## Error Handling

The API uses standard HTTP status codes and provides detailed error messages in the response body.
