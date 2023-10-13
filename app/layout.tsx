import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

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
      <body suppressHydrationWarning={true} className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
