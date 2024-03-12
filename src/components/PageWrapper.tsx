'use client';

import Navbar from './Navbar';
import { Toaster } from './vendor/sonner';
import Providers from '@/utils/providers';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const EXCLUDED_PATHS = ['/', '/sign-in'];

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  let currentPath = '';

  if (pathname === '/tracker') {
    currentPath = 'Tracker';
  } else if (pathname === '/dashboard') {
    currentPath = 'Dashboard';
  } else if (pathname === '/starter-kits') {
    currentPath = 'Starter Kits';
  } else if (pathname === '/settings') {
    currentPath = 'Settings';
  }

  return (
    <Providers>
      <Toaster position="top-center" />
      <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 sm:px-10 lg:px-16 xl:px-24">
        {!EXCLUDED_PATHS.includes(pathname) && <Navbar title={currentPath} />}
        {children}
      </main>
    </Providers>
  );
};

export default PageWrapper;
