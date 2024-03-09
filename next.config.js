const {withNextVideo} = require("next-video/process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = withNextVideo(nextConfig);
