/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "odesco.s3.ap-southeast-1.amazonaws.com",
            },
        ],
    },
};

module.exports = nextConfig;
