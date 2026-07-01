# ChainGuard Daily

ChainGuard Daily is a read-only Solana safety-checking MVP and builder launch-readiness tool. It turns public on-chain information into readable, explainable signals without making financial claims or asking users to connect a wallet.

## Features

- Premium responsive landing page and universal analyzer
- Wallet reports using live confirmed Solana RPC data
- SPL mint authority/supply checks and parsed transaction insights
- Interactive builder launch-readiness scoring across five categories
- Watchlist/dashboard preview and transparent methodology
- Accessible dark UI, loading/error/empty states, copy feedback, and explorer links

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Lucide React, Framer Motion, Recharts, and `@solana/web3.js`.

## Local setup

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Set `SOLANA_RPC_URL` to a dedicated Solana RPC endpoint for production. When live data cannot be reached, reports show an explicit unavailable state and never fabricate a score.

Run verification with:

```bash
npm test
npm run build
```

## Production and Vercel

```bash
npm run build
npm start
```

Import the repository in Vercel, add `SOLANA_RPC_URL` under Project Settings → Environment Variables, and deploy. The app requires no persistent storage for this MVP.

Also set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL and monitor `/api/health`. See [production readiness](docs/PRODUCTION_READINESS.md) before launch.

## Roadmap

- Decoded transaction instruction timelines
- Indexed token holder and liquidity intelligence
- Historical wallet risk changes and authenticated watchlists
- Alerts, monitoring integrations, and reusable exported reports
- Multi-provider confidence and provenance indicators

## Disclaimer

ChainGuard Daily provides technical safety and due-diligence signals only. Scores are heuristic, incomplete, and not a security audit. Nothing in the product is financial advice or a recommendation to buy, sell, hold, or invest.
