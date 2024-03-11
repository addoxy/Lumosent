'use client';

import DeleteHabitButton from './DeleteHabitButton';
import RenameHabitButton from './RenameHabitButton';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';
import { Habit } from '@/lib/types';

const HabitMenu = ({ habit }: { habit: Habit }) => {
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
          <RenameHabitButton habitId={habit.id} prevName={habit.label} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(e) => e.preventDefault()}
          className="h-9 cursor-pointer hover:bg-zinc-800"
        >
          <DeleteHabitButton habitId={habit.id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HabitMenu;
