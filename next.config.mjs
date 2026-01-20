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
        hostname: 'gobook.fr',
        port: '',
        pathname: '/userapi/assets/**', // <-- added this
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**', // allow all Google profile pics
      },
         {
        protocol: "https",
        hostname: "gobookapi.bestworks.cloud",
        pathname: "/assets/**", // 👈 THIS FIXES YOUR ERROR
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);