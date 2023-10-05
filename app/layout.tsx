import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin'], variable: '--font-montserrat', display: 'swap'})

export const metadata: Metadata = {
  title: 'Palparcel',
  description: 'Ecommerce product for vendors and customers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
