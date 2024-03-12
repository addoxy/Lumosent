'use client';

import { deleteHabit } from '@/app/actions/delete-habit';
import { renameHabit } from '@/app/actions/rename-habit';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/vendor/alert-dialog';
import { Button } from '@/components/vendor/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/vendor/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';
import { Input } from '@/components/vendor/input';
import { Habit } from '@/lib/types';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';

const HabitMenu = ({ habit }: { habit: Habit }) => {
  const [renameOpen, setRenameOpen] = useState(false);
  const [newName, setNewName] = useState(habit.label);
  const [isPending, startTransition] = useTransition();

  const handleRename = () => {
    if (newName === '') {
      toast.warning("Habit name can't be empty");
      return;
    }

    startTransition(() => {
      toast.promise(renameHabit(habit.id, newName), {
        loading: 'Renaming habit...',
        success: (data) => {
          setRenameOpen(false);
          return `${data.message}`;
        },
        error: 'Unable to rename habit!',
      });
    });
  };

  const handleDelete = () => {
    startTransition(() => {
      toast.promise(deleteHabit(habit.id), {
        loading: 'Deleting habit...',
        success: (data) => `${data.message}`,
        error: 'Unable to delete habit!',
      });
    });
  };

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
              setRenameOpen(true);
            }}
            className="h-9 cursor-pointer hover:bg-zinc-800"
          >
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => e.preventDefault()}
            className="h-9 cursor-pointer hover:bg-zinc-800"
          >
            <AlertDialog>
              <AlertDialogTrigger className="h-full w-full text-left text-zinc-200">
                Delete
              </AlertDialogTrigger>
              <AlertDialogContent className="border-zinc-900 bg-zinc-950">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-zinc-200">
                    Are you sure you want to delete this habit?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-zinc-300">
                    This action cannot be undone. It will permanently delete all
                    the data associated with this habit, including the
                    statistics for the overview.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    className="hover:bg-zinc-100 hover:text-zinc-800"
                    disabled={isPending}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete();
                    }}
                    className="bg-red-500 hover:bg-red-600"
                    disabled={isPending}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={renameOpen} onOpenChange={setRenameOpen}>
        <DialogContent className="border-zinc-900 bg-zinc-950">
          <form action={handleRename}>
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
    </>
  );
};

export default HabitMenu;
