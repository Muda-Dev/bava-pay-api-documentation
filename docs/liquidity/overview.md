---
id: overview
title: Liquidity rail overview
---

## Liquidity rail overview

### About

The liquidity rail is a platform that enables users to easily convert stablecoins to fiat currency through an easy seamless and simple process. Our mission is to revolutionize cross-border payments and provide a robust solution for both individuals and enterprises.

This documentation presents all the service APIs that MUDA Liquidity Rail makes available.

The Rail Bridge Server is a a system that allows liqudity rail providers to listen for blockchain transactions and execute payouts when payments are received. Providers run the Rail server to monitor blockchain activity, and when a transaction reaches their address, they confirm it and process a fiat payout.

The system operates on multiple networks and supports various assets, making it a robust decentralized financial infrastructure for automated cross-chain payouts.

### Supported Blockchains & Assets

The system operates on the following blockchain networks:

- Stellar - USDC, CNGN
- Celo - CUSD
- Tron - USDT
- Binance Smart Chain (BSC) - CNGN
- Bantu Blockchain - CNGN

You can configure the default blockchain in the .env file or set it to 0 to support all chains.

