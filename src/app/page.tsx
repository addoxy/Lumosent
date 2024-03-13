import { Logo } from '@/components/Icons';
import { Button } from '@/components/vendor/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-x-3">
          <Logo className="size-7 stroke-zinc-300 text-zinc-950 hover:text-zinc-900" />
          <span className="text-xl font-semibold text-zinc-100">Lumosent</span>
        </Link>
        <Button className="bg-zinc-200 font-medium text-zinc-800 hover:bg-zinc-400">
          Sign in
        </Button>
      </nav>
    </main>
  );
}
