/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useCache: true,
    dynamicIO: true,
    cacheLife: {
      page: {
        stale: 0, // 1 hour
        revalidate: 0, // 15 minutes
        expire: 0, // 1 day
      },
      fetch: {
        stale: 5,
        revalidate: 5,
        expire: 15,
      },
    },
  },
  
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig;