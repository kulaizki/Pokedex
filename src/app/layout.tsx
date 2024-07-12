import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Header } from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Explore the beauty of each Pokemon',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex min-h-screen flex-col items-center justify-between px-8 pb-8 pt-2'>
            <Header />
            <div className='w-full'>{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}