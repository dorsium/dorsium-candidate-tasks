
# Dorsium RPC Gateway

This repository contains the Node.js + TypeScript-based API middleware between the Dorsium blockchain and its clients (web, mobile, miner).

## Description

The RPC Gateway acts as a bridge between the Cosmos-based Dorsium blockchain and all client applications. It provides secure, rate-limited REST APIs for accessing wallet data, submitting mining proofs, and retrieving NFT status, while abstracting the complexity of the blockchain layer.

## Features

- RESTful endpoints for wallet, mining, and NFT access  
- Mock and live modes for development and production  
- Cosmos RPC and gRPC integration ready  
- Token-based authentication and optional wallet signature verification  
- Modular TypeScript architecture with middleware layers

## Project Structure

```
dorsium-rpc-gateway/
├── src/
│   ├── api/                # Route handlers
│   │   ├── mining/
│   │   ├── user/
│   │   └── blockchain/
│   ├── services/           # Logic layer
│   ├── middleware/         # Auth, errors, rate limiters
│   ├── utils/              # Utility functions
│   ├── config/             # App config and mode
│   ├── types/              # TypeScript types
│   └── index.ts            # Entrypoint
├── tests/                  # Jest + Supertest
├── .env
├── tsconfig.json
├── package.json
└── README.md
```

## Setup (Dev)

```bash
npm install
npm run dev
```

## API Documentation (Swagger)

This project includes **OpenAPI (Swagger) documentation** to describe the available REST API endpoints.

- The OpenAPI specification file is located at: `openapi.yaml`
- The Swagger UI is served at the endpoint:  
  `http://localhost:8080/rpc-gateway-docs`

You can visit this URL in your browser to explore and interact with the API endpoints visually.

### How it works:

- The API documentation is defined in a YAML file (`openapi.yaml`) following the OpenAPI 3.0 specification.
- The `swagger-ui-express` middleware serves this spec with a user-friendly web interface.
- This helps developers understand available routes, request parameters, and response schemas.

### To update the docs:

1. Edit the `openapi.yaml` file to reflect changes in the API.
2. Restart the server to reload the updated documentation.

## License

This project is licensed under a custom Non-Commercial Contributor License.

- You may view and contribute to the codebase.
- You may **not** use the code for personal or commercial purposes.
- This repository is public for transparency only.

For inquiries or collaboration requests, contact the Dorsium team.