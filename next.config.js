/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextraConfig = withNextra({
  basePath: "/MeteorDocs",
  reactStrictMode: true,
  swcMinify: false,
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  }
})

module.exports = nextraConfig
