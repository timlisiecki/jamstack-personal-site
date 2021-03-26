module.exports = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/resources',
        permanent: false,
      },
    ]
  },
}