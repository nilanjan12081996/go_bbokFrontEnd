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
        hostname: 'gobookapinew.bestworks.cloud',
        port: '',
      
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);