'use client';

import { renameHabit } from '@/app/actions/rename-habit';
import { Button } from '@/components/vendor/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/vendor/dialog';
import { Input } from '@/components/vendor/input';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';

type RenameHabitProps = {
  prevName: string;
  habitId: string;
};

const RenameHabit = (props: RenameHabitProps) => {
  const { habitId, prevName } = props;

  const [newName, setNewName] = useState(prevName);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(() => {
      toast.promise(renameHabit(habitId, newName), {
        loading: 'Renaming habit...',
        success: (data) => `${data.message}`,
        error: 'Unable to rename habit!',
      });
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="h-full w-full text-left">Rename</DialogTrigger>
      <DialogContent className="border-zinc-900 bg-zinc-950">
        <DialogHeader>
          <DialogTitle className="text-base font-medium text-zinc-500">
            Habit name
          </DialogTitle>
        </DialogHeader>
        <Input
          className="border border-zinc-800 bg-zinc-900 text-zinc-200 outline-zinc-500 placeholder:text-zinc-600 focus-visible:outline"
          value={newName}
          placeholder={prevName}
          disabled={isPending}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          className="bg-zinc-100 font-semibold text-zinc-900 hover:bg-zinc-300"
          disabled={isPending}
        >
          Rename habit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RenameHabit;
