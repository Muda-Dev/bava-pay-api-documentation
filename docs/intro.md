---
sidebar_position: 1
---

# New Age OpenAPIs

## Introduction

This documentation presents all the service APIs that New Age makes available.

They cover our **Payout Payments**, **Collection Payments**, and **Multi-Currency Payment Solutions** across the WORLD.

---

## Authentication

The Auth Token method is used to authenticate a client to the New Age platform. The client provides their secret key and API key to receive an access token. This token is used for subsequent requests to the platform.

All requests require this token to be sent in the header in the following format:

```http
Authorization: Bearer {token}
```