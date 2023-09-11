import '@/app/globals.css'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { CssBaseline } from '@mui/material'

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin'], variable: '--font-montserrat', display: 'swap'})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={montserrat.variable}>
      <CssBaseline />
      <Header />
        {children}
      <Footer />
    </main>
  )
}
