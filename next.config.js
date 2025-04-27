module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com", "images.unsplash.com"],
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
  },
  transpilePackages: ["geist"],
};
