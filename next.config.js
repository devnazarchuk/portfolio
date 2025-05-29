/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com'],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
            type: 'asset/resource',
        });
        return config;
    },
};

module.exports = nextConfig; 