'use client';

import { deleteHabit } from '@/app/actions/delete-habit';
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
import { useTransition } from 'react';
import { toast } from 'sonner';

const DeleteHabitButton = ({ habitId }: { habitId: string }) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(() => {
      toast.promise(deleteHabit(habitId), {
        loading: 'Deleting habit...',
        success: (data) => `${data.message}`,
        error: 'Unable to delete habit!',
      });
    });
  };

  return (
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
            This action cannot be undone. It will permanently delete all the
            data associated with this habit, including the statistics for the
            overview.
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
              handleSubmit();
            }}
            className="bg-red-500 hover:bg-red-600"
            disabled={isPending}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteHabitButton;
