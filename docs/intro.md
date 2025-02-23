---
sidebar_position: 1
---

# BavaPay OpenAPIs

## Introduction

This documentation presents all the service APIs that BavaPay makes available.

They cover our **Push Payments**, **Pull Payments**, and **Multi-Currency Payment Solutions** across East Africa.

---

## Authentication

The Auth Token method is used to authenticate a client to the Bavana platform. The client provides their secret key and API key to receive an access token. This token is used for subsequent requests to the platform.

All requests require this token to be sent in the header in the following format:

```http
Authorization: Bearer {token}
```