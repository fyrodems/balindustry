// import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { Inter, Syne } from 'next/font/google'
import { register } from 'swiper/element/bundle'
import '../globals.scss'
import Navbar from '@/components/layout/navbar/Navbar'
import Footer from '@/components/layout/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })
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
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={(syne.className, inter.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
