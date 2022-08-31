/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // exportPathMap: () => ({
  //   "/": { page: "/" },
  //   "/boards": { page: "/boards" },
  //   "/404": { page: "/404" }
  // })
}

module.exports = nextConfig
