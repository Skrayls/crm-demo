# CRM Demo

This is a simple demonstration of a small CRM application with a backend API and a static front‑end.

## Features

- Simple Node.js/Express backend
- Static front‑end served by Cloudflare Pages
- Docker‑compose for local development

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Skrayls/crm-demo.git
cd crm-demo

# Build and run locally
docker-compose up --build
```

The backend API is available at `http://localhost:5000` and the front‑end at `http://localhost:3000`.

## Deploying

The front‑end can be deployed to Cloudflare Pages. Run the following:

```bash
~/.local/bin/openclaw-pages create crm-demo-page
~/.local/bin/openclaw-pages deploy crm-demo-page ./frontend/dist --public-static
```

The URL will be printed after the deploy.
