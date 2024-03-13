'use client';

import {
  CheckIcon,
  CustomizeIcon,
  GraphIcon,
  KitIcon,
  Logo,
} from '@/components/Icons';
import FeatureCard from '@/components/home/FeatureCard';
import {
  EasyLoggingImage,
  HeroImage,
  StatisticsImage,
} from '@/components/home/Images';
import { Button } from '@/components/vendor/button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col">
      <header>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-3">
            <Logo className="size-7 stroke-zinc-300 text-zinc-950 hover:text-zinc-900" />
            <span className="text-xl font-semibold text-zinc-100">
              Lumosent
            </span>
          </Link>
          <Link href="/sign-in">
            <Button className="bg-zinc-200 font-medium text-zinc-800 hover:bg-zinc-400">
              {session ? 'App' : 'Sign in'}
            </Button>
          </Link>
        </nav>
      </header>
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
          <h2 className="mb-6 text-4xl font-medium text-zinc-200">
            Habit Logging Made Easy
          </h2>
          <p className="mb-12 text-lg text-zinc-300">
            Effortlessly and efficiently log entries by tapping just once -
            start building better habits today
          </p>
        </div>
      </section>
      <section className="mt-44 flex items-center justify-between gap-4">
        <div className="flex max-w-lg flex-col">
          <GraphIcon className="mb-6 size-10 text-zinc-200" />
          <h2 className="mb-6 text-4xl font-medium text-zinc-200">
            Detailed statistics
          </h2>
          <p className="mb-12 text-lg text-zinc-300">
            Get in-depth statistics to pinpoint strengths, address challenges,
            and notice patterns – for transformative results
          </p>
        </div>
        <StatisticsImage />
      </section>
      <section className="mx-auto w-8/12">
        <h2 className="mb-10 mt-52 text-center text-4xl font-medium text-zinc-200">
          Even more features
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <FeatureCard
            title="Starter kits"
            content="Make use of a vast collection of ready-made kits tailored to your needs"
            FeatureIcon={<KitIcon className="size-6" />}
          />
          <FeatureCard
            title="Customization"
            content="Making it your own by choosing between the different views and themes"
            FeatureIcon={<CustomizeIcon className="size-6" />}
          />
        </div>
      </section>
      <section className="bg-zinc-925 mx-auto mt-44 grid place-items-center rounded-lg border border-zinc-800 px-32 py-10">
        <h3 className="mb-3 text-center text-2xl font-medium text-zinc-300 sm:text-3xl">
          Get Lumosent today
        </h3>
        <p className="mb-10 text-center leading-6 text-zinc-400">
          and level up your life
        </p>
        <Link href="/sign-in">
          <button className="h-11 w-44 shrink-0 rounded-lg bg-green-500 font-semibold text-zinc-800 transition-all delay-100 duration-200 ease-in-out hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50">
            {session ? 'App' : 'Get started'}
          </button>
        </Link>
      </section>
      <footer className="mt-44 grid place-items-center border-t border-t-zinc-900 pt-10">
        <Link href="/" className="mb-3 flex items-center text-center">
          <Logo className="mr-3 h-5 w-5 stroke-zinc-300 text-zinc-950 hover:text-zinc-900" />
          <span className="text-zinc-200">Lumosent</span>
        </Link>
        <p className="text-center text-zinc-500">
          © 2024 Addoxy. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
