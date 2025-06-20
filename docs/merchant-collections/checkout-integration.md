---
sidebar_position: 2
---

# Payment Checkout

Integrate Muda Crypto Checkout into your application to accept cryptocurrency payments.

## Integration Options

1. **Redirect Flow**: Send customers to the Muda payment page
2. **Embedded Flow**: Display the payment page within your application

## Redirect Flow

### Step 1: Generate an Invoice

```javascript
const response = await fetch("{{URL}}/rail/payments/generateInvoice", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_API_TOKEN",
  },
  body: JSON.stringify({
    amount: 49.99,
    currency: "USD",
    paymentReference: "SUBSCRIPTION-20250619-XYZ123",
    description: "Premium Subscription",
    callbackUrl: "https://yourapp.com/api/payment-callback",
    successRedirectUrl: "https://yourapp.com/payment-success",
    cancelRedirectUrl: "https://yourapp.com/payment-canceled",
  }),
});

const result = await response.json();
const paymentUrl = result.data.paymentUrl;
```

### Step 2: Redirect to Payment URL

```javascript
// Browser redirect
window.location.href = paymentUrl;
```

## Embedded Flow

### Step 1: Generate an Invoice with `embedded: true`

```javascript
body: JSON.stringify({
  amount: 49.99,
  currency: "USD",
  description: "Premium Subscription",
  callbackUrl: "https://yourapp.com/api/payment-callback",
  embedded: true,
});
```

### Step 2: Embed in an iframe

```html
<iframe
  src="https://pay.muda.tech/?quoteId=inv_5f9a1b2c3d4e5f6a7b8c9d0e&embedded=true"
  width="100%"
  height="600px"
  frameborder="0"
  id="muda-payment-frame"
></iframe>
```

### Step 3: Listen for Events

```javascript
window.addEventListener("message", function (event) {
  if (event.origin !== "https://pay.muda.tech") return;

  const { type, data } = event.data;

  switch (type) {
    case "payment:success":
      // Handle successful payment
      break;
    case "payment:failed":
      // Handle failed payment
      break;
    case "payment:canceled":
      // Handle canceled payment
      break;
  }
});
```

## Testing

- **Sandbox URL**: `https://pay.muda.tech`
- **Test Cryptocurrencies**: Test USDC, Test USDT
- **Test Wallets**: Metamask (Mumbai Testnet), Phantom (Solana Devnet)

## Customization

```javascript
{
  "customization": {
    "primaryColor": "#5c6ac4",
    "logo": "https://yourapp.com/logo.png",
    "companyName": "Your Company"
  }
}
```

## Go Live Checklist

1. Switch to production API endpoints
2. Update to production API keys
3. Configure valid callback URLs
4. Test the complete payment flow
5. Set up webhook monitoring

## Security Tips

- Verify payment status via API/webhooks
- Use HTTPS for all communications
- Keep API keys secure
- Validate message origins
