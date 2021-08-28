module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/omOss',
        destination: '/about',
      },
      {
        source: '/artiklar',
        destination: '/articles',
      },
    ]
  },

}
