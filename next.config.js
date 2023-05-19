/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NEXT_PUBLIC_HOME_OG_IMAGE_ID: process.env.NEXT_PUBLIC_HOME_OG_IMAGE_ID,
    HOMEPAGE_ID: process.env.HOMEPAGE_ID
  },
  images: {
    domains: ['images.ctfassets.net']
  }
}
