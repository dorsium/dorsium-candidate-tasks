**Task**
Build a simple Express-based REST API to simulate a user badge system.

**Endpoints**
GET /badges/:userId
→ Return a list of badge objects for the given user ID. Each badge should include:

- id: string
- name: string
- image: string (URL)
- awardedAt: ISO timestamp

POST /wallets
→ Accepts JSON payload:

```
{
  "userId": "abc123",
  "address": "0x1234abcd5678"
}
```
→ Store the wallet address for that user (in memory is fine)

**Requirements**

- Use Express and JavaScript (no database needed)
- Store data in-memory
- Organize your project with proper file structure (routes, config, etc.)

**Bonus points**

- Add input validation (e.g. address must look like Ethereum address)
- Add a Jest test for one of the endpoints
- Provide README.md with brief API usage instructions
- Share Postman collection or Swagger file if you have time

**Deadline**
3–4 days ideally.

**Compensation**
300 DORS (off-chain, claimable after December)

**Submission**
Upload to GitHub through the branch created for you.