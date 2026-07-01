# Production readiness

## Verified in repository

- Read-only server-side Solana RPC access with confirmed commitment.
- Explicit wallet, token mint, and transaction input modes.
- No fabricated report data when RPC calls fail.
- Request timeout and provider rate-limit messaging.
- Wallet balance, recent signature, failure-rate, and token-account signals.
- SPL mint supply, decimals, mint authority, and freeze authority checks.
- Parsed transaction status, fee, instructions, and invoked programs.
- Security headers, health endpoint, sitemap, robots policy, and secret-safe env template.
- Automated heuristic and validation tests plus a production build check.

## Required before deployment

- Add a dedicated production `SOLANA_RPC_URL`; do not use the public endpoint for launch traffic.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS deployment URL.
- Configure an uptime check for `/api/health` and alert on sustained 503 responses.
- Define an owner and communication channel for RPC outages and incorrect report data.
- Manually test representative wallet, SPL Token, Token-2022, successful transaction, failed transaction, invalid input, and rate-limit cases.

## Deliberately out of score

The current direct-RPC product does not score liquidity, holder concentration, off-chain metadata reputation, address poisoning, spam-token history, or program reputation. These require additional indexed data and must remain visibly marked as unavailable until implemented.

## Incident response

1. Confirm whether the issue is UI-only, RPC degradation, incorrect interpretation, or a security incident.
2. Disable or label the affected signal if correctness is uncertain.
3. Preserve affected public addresses/signatures and timestamps; never collect secrets.
4. Publish a concise status update for user-impacting incidents.
5. Correct the issue, verify against known fixtures, deploy, and document the root cause.

## Accepted dependency risk

`@solana/web3.js` currently brings a transitive `uuid` advisory involving caller-supplied output buffers. ChainGuard does not call that API or supply UUID buffers. This is tracked as an upstream moderate-severity dependency finding rather than force-installing an incompatible Solana library version. Reassess when the upstream package releases a compatible fix or during migration to the successor Solana client libraries.
