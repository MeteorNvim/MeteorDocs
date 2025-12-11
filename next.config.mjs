// next.config.mjs
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const config = {
  basePath: "/MeteorDocs",
  reactStrictMode: true,
  swcMinify: false,

  // Static export
  output: "export",
  distDir: "build",

  images: {
    unoptimized: true,
  },
};

export default withNextra(config);
