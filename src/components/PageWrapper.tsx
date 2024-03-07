import { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full max-w-screen-xl flex-col px-24 py-10">
      {children}
    </main>
  );
};

export default PageWrapper;
