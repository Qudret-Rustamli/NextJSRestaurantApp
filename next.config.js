/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'az'],
    defaultLanguage: 'en',
  },
};

module.exports = nextConfig;
