## Endpoints

### GET /api/badges/:userId
Returns list of badges for the user.

#### Example Response:
```json
[
  {
    "id": "badge-1",
    "name": "Early Adopter",
    "image": "https://example.com/early.png",
    "awardedAt": "2025-06-30T12:00:00Z"
  }
]
```

### POST /api/wallets
Registers a wallet for a user.

#### Body:
```json
{
  "userId": "abc123",
  "address": "0x1234567890123456789012345678901234567890"
}
```
