---
sidebar_position: 1
---

# Muda Pay API Documentation

## Introduction

This document provides information about the Muda Payments API endpoints that are available for third-party integration. The API allows you to process **payments**, **check balances**, and **manage transactions**.


---

## Authentication

The Auth Token method is used to authenticate a client to the New Age platform. The client provides their secret key and API key to receive an access token. This token is used for subsequent requests to the platform.

All API requests (except for login) require authentication using a JWT token. The token should be included in the `Authorization` header as a Bearer token.

```
Authorization: Bearer <your_jwt_token>
```

## Base URL

```
https://api.muda.com/payment
```
