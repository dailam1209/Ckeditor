/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'c.wallhere.com',
            },
            {
                protocol: 'https',
                hostname: 'timviechay.vn',
            },
            {
                protocol: 'https',
                hostname: 'work247.vn',
            },
            
        ],
    },
    flags: {
        DEV_SSR: false,
      },
    experimental: {
        appDir: true
    }
  };
  
  export default nextConfig;
  