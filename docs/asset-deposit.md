# Asset Deposit (One-time use)

Asset Deposit generates a uniques deposit address where you can send supported assets to credit your account.

:::note
It is not available in production by default. Please contact us to enable it.
:::

## Summary

The Asset Deposit endpoint creates a blockchain deposit address that forwards the received tokens to an Identity's Account within the Muda Pay system. These addresses are intended for a one-time use only, and will not continue forwarding tokens to the Account after the first transaction is completed.

It is a transaction similar to other operations in the system (e.g., withdrawals, deposits, swaps). Once the transaction is created, it will have a Pending status, and the customer will receive detailed instructions in the transaction object, like a regular deposit.

## How It Works

1. **Create a Transaction**: Initiate an asset deposit transaction by sending a request to the API.
2. **Receive Instructions**: You will get a response in a Pending status and an instructions object containing the necessary details for the on-chain deposit.
3. **Send Assets**: Transfer the specified asset and amount to the provided blockchain address.
4. **Automatic Completion**: Once assets are detected, they will be auto credited to your account
