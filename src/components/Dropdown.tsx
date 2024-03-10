'use client';

import {
  TrackerIcon,
  DashboardIcon,
  KitIcon,
  SettingsIcon,
  SignoutIcon,
} from './Icons';
import { Avatar, AvatarImage, AvatarFallback } from './vendor/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';
import { formatName } from '@/utils/utils';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

const Dropdown = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <Avatar className="size-8">
          <AvatarImage
            className="size-8 rounded-full"
            src={session?.user?.image || ''}
          />
          <AvatarFallback className="flex size-8 items-center justify-center rounded-full bg-violet-800 text-xs font-medium text-zinc-50">
            {session?.user?.name && formatName(session?.user?.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-1 w-52 border border-zinc-800 bg-zinc-900 font-medium"
      >
        <DropdownMenuLabel className="mb-2 flex flex-col gap-y-1">
          <span>{session?.user?.name}</span>
          <span className="text-xs font-normal text-zinc-400">
            {session?.user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="-mx-2 bg-zinc-800" />
        <DropdownItem setIsOpen={setIsOpen} name="Tracker" href="/tracker" />
        <DropdownItem
          setIsOpen={setIsOpen}
          name="Dashboard"
          href="/dashboard"
        />
        <DropdownItem
          setIsOpen={setIsOpen}
          name="Starter Kits"
          href="/starter-kits"
        />
        <DropdownItem setIsOpen={setIsOpen} name="Settings" href="/settings" />
        <DropdownMenuSeparator className="-mx-2 bg-zinc-800" />
        <button
          onClick={() => signOut()}
          className="flex h-9 w-full items-center gap-x-2 rounded-sm pl-2 text-left hover:bg-zinc-800"
        >
          <SignoutIcon className="size-3.5 text-zinc-50" />
          Sign out
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type DropdownItemProps = {
  name: string;
  href: string;
  setIsOpen: (value: boolean) => void;
};

const DropdownItem = (props: DropdownItemProps) => {
  const { name, href, setIsOpen } = props;

  return (
    <DropdownMenuItem
      onClick={() => setIsOpen(false)}
      className="h-9 hover:bg-zinc-800"
    >
      <Link href={href} className="flex h-full w-full items-center gap-x-2">
        {name === 'Tracker' && (
          <TrackerIcon className="size-3.5 text-zinc-50" />
        )}
        {name === 'Dashboard' && (
          <DashboardIcon className="size-3.5 text-zinc-50" />
        )}
        {name === 'Starter Kits' && (
          <KitIcon className="size-3.5 text-zinc-50" />
        )}
        {name === 'Settings' && (
          <SettingsIcon className="size-3.5 text-zinc-50" />
        )}
        {name}
      </Link>
    </DropdownMenuItem>
  );
};

export default Dropdown;
