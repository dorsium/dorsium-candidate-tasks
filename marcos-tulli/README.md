### Task

Create a new public /status endpoint in the Dorsium RPC Gateway that returns the current API version, timestamp, and mode.

Requirements

Route: `GET /status`

### Response:

```
json
{
  "status": "ok",
  "version": "0.1.0",
  "timestamp": "<current UTC ISO timestamp>",
  "mode": "mock" // from config or env var
}
```

Add code in src/api/status/index.ts

If needed, create or update src/config.ts to hold the version and mode

Register the route properly in the app’s router

**Optional:** write a simple Jest test

This helps us test basic uptime and config. No auth needed.

Deadline: ideally in 3–4 days
Compensation: 300 DORS (off-chain, claimable after December)
Submit as: GitHub PR from your own branch
