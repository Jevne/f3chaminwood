/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        loader: 'imgix', // Use 'imgix', 'cloudinary', or 'akamai'
        path: '', // Path is empty for static exports
    },
};

module.exports = nextConfig;
