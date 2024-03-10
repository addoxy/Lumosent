'use client';

import DeleteHabit from './DeleteHabit';
import RenameHabit from './RenameHabit';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';
import { Habit } from '@/lib/types';

const HabitDropdown = ({ habit }: { habit: Habit }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md p-0.5 hover:bg-zinc-900">
        <ThreeDotsIcon className="size-4 text-zinc-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-1 w-20 border border-zinc-800 bg-zinc-900 font-medium"
      >
        <DropdownMenuItem
          onClick={(e) => e.preventDefault()}
          className="h-9 cursor-pointer hover:bg-zinc-800"
        >
          <RenameHabit habitId={habit.id} prevName={habit.label} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(e) => e.preventDefault()}
          className="h-9 cursor-pointer hover:bg-zinc-800"
        >
          <DeleteHabit habitId={habit.id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HabitDropdown;
