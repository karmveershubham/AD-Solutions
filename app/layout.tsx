import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import HeaderComponent from '@/components/header';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PN Ad Solution - Creative Design & Branding Agency',
  description: 'Professional design, visual merchandising, retail branding, turnkey solutions, events, and corporate gifting services.',
  keywords: 'design agency, visual merchandising, retail branding, corporate gifting, events management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className} suppressHydrationWarning>
        <HeaderComponent/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}