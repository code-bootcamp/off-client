/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  // exportPathMap: () => ({
  //   "/": { page: "/" },
  //   "/boards": { page: "/boards" },
  //   "/404": { page: "/404" }
  // })
}

module.exports = nextConfig
