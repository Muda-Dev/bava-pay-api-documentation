---
title: Asset Deposits
---

# Asset Deposits (One-time use)

Asset Deposit creates a block deposit address that transfers tokens to an Account within the Borderless system.

:::note
It is not available in production by default. Please contact Borderless to enable it.
:::

## Overview

The Asset Deposit endpoint creates a blockchain deposit address that forwards the received tokens to an Identity's Account within the Borderless system. These addresses are intended for a one-time use only, and will not continue forwarding tokens to the Account after the first transaction is completed.

It is a transaction similar to other operations in the system (e.g., withdrawals, deposits, swaps). Once the transaction is created, it will have a Pending status, and the customer will receive detailed instructions in the transaction object, like a regular deposit.

## How It Works

1. **Create a Transaction**: Initiate an asset deposit transaction by sending a request to the API.
2. **Receive Instructions**: You will get a response in a Pending status and an instructions object containing the necessary details for the on-chain deposit.
3. **Deposit Funds**: Transfer the specified asset and amount to the provided blockchain address.
4. **Move Asset to Account**: Transfer the received asset from the temporal address to the Account.
5. **Automatic Completion**: The transaction status will update to Completed once the funds are moved to the Account.

## Supported Assets

### Production

| Blockchain | Native token | USDC | USDT |
|------------|--------------|------|------|
| Bitcoin    | ✅          | ❌   | ❌   |
| Ethereum   | ✅          | ❌   | ❌   |
| Base       | ✅          | ❌   | ❌   |
| Celo       | ✅          | ❌   | ❌   |
| Polygon    | ✅          | ✅   | ✅   |
| Tron       | ✅          | ❌   | ✅   |
| Solana     | ✅          | ❌   | ❌   |

### Sandbox

| Blockchain | Native token | USDC | USDT |
|------------|--------------|------|------|
| Bitcoin    | ✅          | ❌   | ❌   |
| Ethereum   | ✅          | ❌   | ❌   |
| Base       | ✅          | ❌   | ❌   |
| Celo       | ✅          | ❌   | ❌   |
| Polygon    | ✅          | ❌   | ❌   |
| Tron       | ✅          | ❌   | ❌   |
| Solana     | ✅          | ❌   | ❌   | 