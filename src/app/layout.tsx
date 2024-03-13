import '../styles/globals.css';
import PageWrapper from '@/components/PageWrapper';
import { cn } from '@/utils/utils';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumosent',
  description:
    'A habit tracker that offers effortless habit tracking, detailed statistics to figure out your strong and weak points, and starter kits to help you get started.',
  authors: [{ name: 'Addoxy' }],
  category: 'Habit tracker',
  keywords: [
    'habit-tracker',
    'habit-tracker-react',
    'habit-tracking',
    'productivity',
    'project',
  ],
  metadataBase: new URL('https://lumosent.addoxy.me'),
  openGraph: {
    title: 'Lumosent',
    description:
      'A habit tracker that offers effortless habit tracking, detailed statistics to figure out your strong and weak points, and starter kits to help you get started.',
    url: 'https://lumosent.addoxy.me',
    siteName: 'Lumosent',
    images: [
      {
        url: 'https://lumosent.addoxy.me/logo.png',
        width: 128,
        height: 128,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'debug-screens bg-zinc-950 text-sm text-zinc-50 antialiased',
          inter.className
        )}
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
