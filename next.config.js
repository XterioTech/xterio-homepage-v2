/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/asset',
        destination: 'https://app.xter.io/asset',
        permanent: true,
      },
      {
        source: '/activities/palio',
        destination: 'https://app.xter.io/activities/palio',
        permanent: true,
      },
      {
        source: '/activities/aod-signup',
        destination: 'https://app.xter.io/activities/aod-signup',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/games',
        destination: 'https://app.xter.io/games',
        permanent: true,
      },
      {
        source: '/launchpad',
        destination: 'https://app.xter.io/launchpad',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: 'https://app.xter.io/dashboard',
        permanent: true,
      },
      {
        source: '/build',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
      {
        source: '/marketplace',
        destination: 'https://app.xter.io/marketplace',
        permanent: true,
      },
      {
        source: '/settings',
        destination: 'https://app.xter.io/settings',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/legal/terms-of-service',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/game-token-topup',
        destination: 'https://app.xter.io/game-token-topup',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/games/:slug*',
        destination: 'https://app.xter.io/games/:slug*',
        permanent: true,
      },
      {
        source: '/fans/:slug*',
        destination: 'https://app.xter.io/fans/:slug*',
        permanent: true,
      },
      {
        source: '/launchpad/:slug*',
        destination: 'https://app.xter.io/launchpad/:slug*',
        permanent: true,
      },
      {
        source: '/dashboard/:slug*',
        destination: 'https://app.xter.io/dashboard/:slug*',
        permanent: true,
      },
      {
        source: '/nft-detail/:slug*',
        destination: 'https://app.xter.io/nft-detail/:slug*',
        permanent: true,
      },
      {
        source: '/collection/:slug*',
        destination: 'https://app.xter.io/collection/:slug*',
        permanent: true,
      },
      {
        source: '/protocol/:slug*',
        destination: 'https://app.xter.io/protocol/:slug*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
