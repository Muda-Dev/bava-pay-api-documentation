---
id: configurations
title: Configurations
---

# Configuration

The `.env` file must be present in the working directory and should contain the following values:

### General Settings

- `DEBUG=True`
- `PORT=8001`
- `address` - The blockchain address that will be receiving payments.
- `callback_url` - URL that will be called when a new payment has been received.
- `webhook_url` - URL that will receive payment notifications once a transaction is completed.
- `currency` - The default currency for payouts (e.g., UGX, USD, EUR, etc.).
- `default_chain` - The blockchain used for transactions (CELO, STELLAR, TRON, BSC, BANTU, etc.).


### Database Configuration
- `database`
   - `HOST_NAME=localhost`
   - `USER_NAME=root`
   - `PASSWORD=root`
   - `DBNAME=liqudity_rail_server`

### Provider-Specific Settings
- `mode=dev`
- `enc_key` - Encryption key used to sign callbacks.
- `RATE_ENDPOINT` - Exchange rate endpoint for providers.
- `PAYOUT_URL` - URL where fiat payouts are requested.
- `PROVIDER_NAME` - Name of the provider.
- `PROVIDER_ID` - Unique identifier for the provider.
- `PAY_CURRENCY` - The currency for payouts.

### Supported Assets
`SUPPORTED_ASSETS=["USDT", "USDC", "CNGN"]`


### 
```json
  https://rail.stage-mudax.xyz/accounts/register
```