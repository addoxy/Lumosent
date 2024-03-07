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
import Link from 'next/link';

const Dropdown = () => {
  const name = 'John Doe';
  const email = 'johndoe@example.com';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-8">
          <AvatarImage className="size-8 rounded-full" src={''} />
          <AvatarFallback className="flex size-8 items-center justify-center rounded-full bg-blue-400 text-white">
            {formatName(name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-52 border border-zinc-800 bg-zinc-950 font-medium"
      >
        <DropdownMenuLabel className="mb-2 flex flex-col gap-y-1">
          <span>{name}</span>
          <span className="text-xs font-normal text-zinc-400">{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="-mx-2 bg-zinc-800" />
        <DropdownItem name="Tracker" href="/tracker" />
        <DropdownItem name="Dashboard" href="/dashboard" />
        <DropdownItem name="Starter Kits" href="/starter-kits" />
        <DropdownItem name="Settings" href="/settings" />
        <DropdownMenuSeparator className="-mx-2 bg-zinc-800" />
        <button className="flex h-9 w-full items-center gap-x-2 rounded-sm pl-2 text-left hover:bg-zinc-800">
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
};

const DropdownItem = (props: DropdownItemProps) => {
  const { name, href } = props;

  return (
    <DropdownMenuItem className="h-9 hover:bg-zinc-800">
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
