// next.config.js
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_stork: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  experiments: {
    swcLoader: true,
    swcMinify: true,
  },
  async redirects() {
    return [
      {
        source: "/usage",
        destination: "/reference/command-line-reference",
        permanent: true,
      },
    ];
  },
});