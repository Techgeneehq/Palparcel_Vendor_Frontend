import type { Metadata } from 'next';
import './globals.css';


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
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
