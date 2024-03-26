/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/no-await-expression-member */
// import type { Metadata } from 'next'

import { getTranslations } from 'next-intl/server'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { Inter } from 'next/font/google'
import { register } from 'swiper/element/bundle'
import '../globals.scss'
import { TanstackWrapper } from './TanstackWrapper'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/footer/Footer'
import { Toaster } from '@/components/ui/toaster'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })
register()

export async function generateMetadata() {
  const t = await getTranslations('metaData.homepage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  const locale = useLocale()
  let messages
  try {
    messages = (await import(`@/libs/i18n/messages/${locale}.json`)).default
  } catch {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <TanstackWrapper>{children}</TanstackWrapper>
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
