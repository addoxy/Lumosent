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
  open: boolean;
  setOpen: (value: boolean) => void;
};

const RenameHabitMenu = (props: RenameHabitProps) => {
  const { habitId, prevName, open, setOpen } = props;
  const [newName, setNewName] = useState(prevName);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    if (newName === '') {
      toast.warning("Habit name can't be empty");
      return;
    }

    startTransition(() => {
      toast.promise(renameHabit(habitId, newName), {
        loading: 'Renaming habit...',
        success: (data) => {
          setOpen(false);
          return `${data.message}`;
        },
        error: 'Unable to rename habit!',
      });
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-zinc-900 bg-zinc-950">
        <form action={handleSubmit}>
          <DialogHeader className="mb-4">
            <DialogTitle className="text-base font-medium text-zinc-500">
              Habit name
            </DialogTitle>
          </DialogHeader>
          <Input
            className="mb-5 border border-zinc-800 bg-zinc-900 text-zinc-200 outline-zinc-500 placeholder:text-zinc-600 focus-visible:outline"
            value={newName}
            disabled={isPending}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full bg-zinc-100 font-semibold text-zinc-900 hover:bg-zinc-300"
            disabled={isPending}
          >
            Rename habit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameHabitMenu;
