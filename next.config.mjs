/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rahem-dev.storage.iran.liara.space'
            }
        ]
    },
    output: 'standalone'
};

export default nextConfig;
