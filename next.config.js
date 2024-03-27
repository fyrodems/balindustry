const withNextIntl = require('next-intl/plugin')('./src/libs/i18n/i18n.ts')

module.exports = withNextIntl({})

/* const withNextIntl = require('next-intl/plugin')('./src/libs/i18n/i18n.ts')

module.exports = withNextIntl({
  experimental: {
    // this includes files from the monorepo base two directories up
    // eslint-disable-next-line unicorn/prefer-module
    outputFileTracingIncludes: {
      '/api/converModel/*': ['./public/*.wasm'],
    },
  },
})
 */
