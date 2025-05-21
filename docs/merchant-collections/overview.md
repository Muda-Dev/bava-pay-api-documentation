---
sidebar_position: 1
---

# Overview

The Merchant Collections API enables businesses to accept cryptocurrency payments with automatic settlement to your Muda Pay wallet.

## Features

Our payment solution lets you generate invoices, accept cryptocurrencies like USDC and USDT, receive real-time notifications, and track payment status.

## Payment Process

When a customer makes a payment, our system generates a unique payment link. The customer selects their preferred cryptocurrency and completes the transaction. After blockchain validation, funds are settled directly to your wallet, and you receive webhook notifications about the payment status.

## API Endpoints

The API provides endpoints for generating invoices, checking payment status, and canceling invoices. When integrating, you'll receive webhooks that notify your application of payment events such as creation, completion, or failure.

## Getting Started

To get started, use our test credentials in the sandbox environment. No actual cryptocurrency transfers occur during testing. For testing webhooks, services like webhook.site can help capture events during development. 