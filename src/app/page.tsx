'use client';

import { GraphIcon, Logo } from '@/components/Icons';
import { CheckIcon } from '@/components/Icons';
import {
  EasyLoggingImage,
  StatisticsImage,
  HeroImage,
} from '@/components/home/Images';
import { Button } from '@/components/vendor/button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-x-3">
          <Logo className="size-7 stroke-zinc-300 text-zinc-950 hover:text-zinc-900" />
          <span className="text-xl font-semibold text-zinc-100">Lumosent</span>
        </Link>
        <Link href="/sign-in">
          <Button className="bg-zinc-200 font-medium text-zinc-800 hover:bg-zinc-400">
            {session ? 'App' : 'Sign in'}
          </Button>
        </Link>
      </nav>
      <section className="mt-32 flex items-center justify-between">
        <div className="flex max-w-lg flex-col">
          <h1 className="mb-6 text-5xl font-medium text-zinc-200">
            The Habit Tracker to Level Up Your Life
          </h1>
          <p className="mb-12 text-lg text-zinc-300">
            Experience effortless habit tracking like never before with
            Lumosent. See detailed statistics to figure out where you are
            lacking and take action easily.
          </p>
          <div className="group relative w-96">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 opacity-80 blur transition duration-1000 group-hover:opacity-100 group-hover:blur-md group-hover:duration-200" />
            <Link href="/sign-in">
              <Button
                size="lg"
                className="relative flex w-full shrink-0 items-center justify-center gap-x-1 rounded-lg bg-zinc-200 font-medium text-zinc-900 transition-all duration-200 ease-in-out group-hover:bg-zinc-50"
              >
                {session ? 'App' : 'Get Started ->'}
              </Button>
            </Link>
          </div>
        </div>
        <HeroImage />
      </section>
      <section className="mt-44 flex items-center justify-between gap-4">
        <EasyLoggingImage />
        <div className="flex max-w-lg flex-col">
          <CheckIcon className="mb-6 size-10 text-zinc-200" />
          <h1 className="mb-6 text-4xl font-medium text-zinc-200">
            Habit Logging Made Easy
          </h1>
          <p className="mb-12 text-lg text-zinc-300">
            Effortlessly and efficiently log entries by tapping just once -
            start building better habits today
          </p>
        </div>
      </section>
      <section className="mt-44 flex items-center justify-between gap-4">
        <div className="flex max-w-lg flex-col">
          <GraphIcon className="mb-6 size-10 text-zinc-200" />
          <h1 className="mb-6 text-4xl font-medium text-zinc-200">
            Detailed statistics
          </h1>
          <p className="mb-12 text-lg text-zinc-300">
            Get in-depth statistics to pinpoint strengths, address challenges,
            and notice patterns – for transformative results
          </p>
        </div>
        <StatisticsImage />
      </section>
    </main>
  );
}
