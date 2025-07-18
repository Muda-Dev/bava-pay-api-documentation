---
id: register-as-provider
title: Becoming a Provider
sidebar_position: 2
---

# Becoming a Provider

## What is a Provider?

A **Provider** in the Liquidity Rail system is a financial institution, payment service provider, or fintech company that offers liquidity services for specific currencies and payment methods. Providers are responsible for:

- **Rate Provision**: Providing real-time exchange rates for currency pairs
- **Transaction Processing**: Handling the actual settlement of transactions
- **Service Coverage**: Supporting specific currencies and payment methods (BANK_TRANSFER or MOBILE_MONEY)
- **Compliance**: Ensuring regulatory compliance in their jurisdictions

Providers act as the backbone of the Liquidity Rail network, enabling seamless cross-border transactions and local payment processing.

## Registration Process

### Step 1: Muda Pay Registration
Before becoming a Liquidity Rail provider, you must first be registered as a client on the Muda Pay platform. This ensures you have the necessary infrastructure and compliance requirements in place.

### Step 2: Provider Application
Once registered on Muda Pay, you can apply to become a Liquidity Rail provider by:

1. **Filling the Provider Registration Form**: Visit [https://liquidityrail.com/provider-register](https://liquidityrail.com/provider-register) and complete the application form
2. **Providing Required Information**:
   - Company details and legal information
   - Supported currencies and payment methods
   - Technical contact information
   - Compliance and regulatory documentation

### Step 3: Approval Process
After submitting your application:
- The Muda team will review your application
- Technical and compliance assessments will be conducted
- You will be notified of approval or any required changes
- Upon approval, you'll receive access to the provider integration documentation

### Step 4: Technical Integration
Once approved, you must implement the standard Liquidity Rail provider endpoints:

- **Rates Endpoint**: Provide real-time exchange rates
- **Transaction Processing**: Handle transaction settlement
- **Status Updates**: Report transaction status changes

## Service Configuration

As a provider, you specify which services you support:

### Payment Methods
- **BANK_TRANSFER**: Traditional bank transfers
- **MOBILE_MONEY**: Mobile money services

### Currency Support
You can support multiple currencies. For example:
- **RWF**: Rwandan Franc
- **UGX**: Ugandan Shilling
- **KES**: Kenyan Shilling
- **NGN**: Nigerian Naira

### Example Configuration
A provider might offer:
- **MOBILE_MONEY** for **RWF** (Rwandan mobile money)
- **BANK_TRANSFER** for **UGX** (Ugandan bank transfers)
- **MOBILE_MONEY** for **KES** (Kenyan mobile money)

## Technical Implementation

After approval, you must implement the standard provider endpoints. We provide a boilerplate implementation to help you get started quickly.

### GitHub Boilerplate
Access our provider boilerplate at: [Liquidity Rail Provider Boilerplate](https://github.com/Muda-Dev/lr-provider-boilerplate)

This boilerplate includes:
- Standard endpoint implementations
- Authentication handling
- Rate calculation examples
- Transaction processing templates
- Error handling patterns

### Required Endpoints
You must implement these standard endpoints:
- Rate provision endpoints
- Transaction processing endpoints
- Status update endpoints
- Health check endpoints

For detailed technical specifications, see the [Provider Side Endpoints](./provider-side) documentation.

