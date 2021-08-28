module.exports = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/omOss',
  //       destination: '/about',
  //     },
  //     {
  //       source: '/artiklar',
  //       destination: '/articles',
  //     },
  //   ]
  // },
  exportPathMap: async function (
  ) {
    return {
      '/omOss': { page: '/about' },
      '/artiklar': { page: '/articles' },
    };
  },

}
