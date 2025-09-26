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
    ],
  },
};

export default withFlowbiteReact(nextConfig);