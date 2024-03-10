'use client';

import DeleteHabit from './DeleteHabit';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';

const HabitDropdown = ({ habitId }: { habitId: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md p-0.5 hover:bg-zinc-900">
        <ThreeDotsIcon className="size-4 text-zinc-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-1 w-20 border border-zinc-800 bg-zinc-900 font-medium"
      >
        <DropdownMenuItem className="h-9 cursor-pointer hover:bg-zinc-800">
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(e) => e.preventDefault()}
          className="h-9 cursor-pointer hover:bg-zinc-800"
        >
          <DeleteHabit habitId={habitId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HabitDropdown;
