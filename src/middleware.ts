import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './navigation'

export default createMiddleware({
  defaultLocale: 'pl',
  localePrefix,
  locales,
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/', '/(pl|en|de|fr)/:path*'],
}
