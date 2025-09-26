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
        hostname: 'gobook.fr/userapi/',
        port: '',
        pathname: '/uploads/images/**'
      
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);