'use client';

import { createHabit } from '@/app/actions/create-habit';
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

const PLACEHOLDER_HABITS = [
  'Meditation',
  'Journaling',
  'Nature walk',
  'Read a book',
  'Learn a new skill',
  'Gym',
  'Yoga',
  'Healthy meal prep',
  'Dance',
  'Cold shower',
  'Declutter workspace',
  'Make your bed',
  'No-phone time',
  'Write a short story',
  'Doodle or sketch',
  'Play an instrument',
  'Spend time with loved ones',
  'Plan a fun activity',
];

const NewHabitButton = () => {
  const [habit, setHabit] = useState('');
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (habit === '') {
      toast.warning("Habit name can't be empty");
      return;
    }

    // create a custom hook for this and use it wherever needed
    startTransition(() => {
      toast.promise(createHabit(habit), {
        loading: 'Creating habit...',
        success: (data) => {
          setOpen(false);
          return `${data.message}`;
        },
        error: 'Unable to create habit!',
      });
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-zinc-800 text-zinc-200 hover:bg-zinc-900"
        >
          + New Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="border-zinc-900 bg-zinc-950">
        <form action={handleSubmit}>
          <DialogHeader className="mb-4">
            <DialogTitle className="text-base font-medium text-zinc-500">
              Habit name
            </DialogTitle>
          </DialogHeader>
          <Input
            className="mb-5 border border-zinc-800 bg-zinc-900 text-zinc-200 outline-zinc-500 placeholder:text-zinc-600 focus-visible:outline"
            value={habit}
            placeholder={
              PLACEHOLDER_HABITS[
                Math.floor(Math.random() * PLACEHOLDER_HABITS.length)
              ]
            }
            disabled={isPending}
            onChange={(e) => setHabit(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full bg-zinc-100 font-semibold text-zinc-900 hover:bg-zinc-300"
            disabled={isPending}
          >
            Create new habit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewHabitButton;
