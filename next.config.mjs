import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nwaa.trendline.marketing",
        port: "",
        pathname: "/**",
      },

    ],
  },
};
export default withNextIntl(nextConfig);


