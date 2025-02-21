# nextjs-redis-cache-handler-example

Example of a nextjs 15 app using redis as cache handler (02/2025).

## Overview

This repository demonstrates the implementation of Redis as a cache handler in Next.js 15. The code is based on the [official Next.js Redis cache handler example](https://github.com/vercel/next.js/tree/canary/examples/cache-handler-redis).

## Architecture

The setup consists of:
- Two Next.js instances sharing the same Redis cache
- A Redis server for centralized caching
- Docker Compose configuration for local startup

This architecture showcases how multiple Next.js instances can share a common Redis cache, making it ideal for distributed deployments and horizontal scaling scenarios.

## Credit

This implementation follows the patterns established in the official Next.js examples. For more details, visit the [original example repository](https://github.com/vercel/next.js/tree/canary/examples/cache-handler-redis).
