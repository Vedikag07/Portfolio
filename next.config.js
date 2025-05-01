const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export', // Required for static export
    basePath: isProd ? '/Portfolio' : '', // Custom base path for production
    assetPrefix: isProd ? '/Portfolio/' : '', // Asset prefix for production
    images: {
        unoptimized: true, // Disable image optimization (useful for static export)
    },
    distDir: 'out', // Output directory for static export
};

module.exports = nextConfig;