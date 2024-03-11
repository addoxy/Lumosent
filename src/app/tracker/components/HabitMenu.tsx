'use client';

import DeleteHabitButton from './DeleteHabitButton';
import RenameHabitMenu from './RenameHabitMenu';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';
import { Habit } from '@/lib/types';
import { useState } from 'react';

const HabitMenu = ({ habit }: { habit: Habit }) => {
  const [habitMenuOpen, setHabitMenuOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md p-0.5 hover:bg-zinc-900">
          <ThreeDotsIcon className="size-4 text-zinc-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="mt-1 w-20 border border-zinc-800 bg-zinc-900 font-medium"
        >
          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault();
              setHabitMenuOpen(true);
            }}
            className="h-9 cursor-pointer hover:bg-zinc-800"
          >
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => e.preventDefault()}
            className="h-9 cursor-pointer hover:bg-zinc-800"
          >
            <DeleteHabitButton habitId={habit.id} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <RenameHabitMenu
        habitId={habit.id}
        prevName={habit.label}
        open={habitMenuOpen}
        setOpen={setHabitMenuOpen}
      />
    </>
  );
};

export default HabitMenu;
