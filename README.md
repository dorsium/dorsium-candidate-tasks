# User Badge API

A simple Express.js API to simulate a user badge and wallet system.

## Endpoints

### GET `/badges/:userId`
Returns badge list for given user.

### POST `/wallets`
Accepts JSON:
```json
{
  "userId": "abc123",
  "address": "0x1234abcd5678ef9012345678abcdef9012345678"
}

Returns:
```json
{
  "message": "Wallet address stored successfully."
}
```

## Run
```bash
npm install
node server.js
```

## Test
```bash
npm test
```

## Notes
- In-memory storage only
- Includes basic validation
- Includes 1 test with Jest