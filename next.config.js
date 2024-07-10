module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com", "images.unsplash.com"],
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
