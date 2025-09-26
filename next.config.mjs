import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
         protocol: 'https',
        hostname: 'gobook.fr',
        port: '',
        pathname: '/userapi/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**', // allow all Google profile pics
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);