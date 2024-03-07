import { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-24 py-10">
      {children}
    </main>
  );
};

export default PageWrapper;
