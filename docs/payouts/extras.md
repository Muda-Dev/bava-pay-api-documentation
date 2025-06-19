# Extras

Some products require additional fields for processing payouts. These should be included in the `extra_data` object, appended to the main direct payout object.

### Product Codes Requiring Extra Data

Each product code is associated with a boolean flag indicating whether it requires extra data:

- `1` = Requires extra data  
- `0` = Does not require extra data

---

## 1. INTERAC_PAYOUT

This product requires the following extra fields:

### Required Fields

- `interact_email`: The recipient's Interac email address.  
- `interact_name`: The recipient's name as registered with Interac.

### Example

```jsonc
{
  "extra_data": {
    "interact_email": "recipient@example.com",
    "interact_name": "John Doe"
  }
}
