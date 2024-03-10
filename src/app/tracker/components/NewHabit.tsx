'use client';

import { postHabit } from '@/app/actions/post-habit';
import { Button } from '@/components/vendor/button';

const NewHabitButton = () => {
  return (
    <Button
      onClick={() => postHabit('Journaling')}
      variant="outline"
      className="border-zinc-800 text-zinc-200 hover:bg-zinc-900"
    >
      + New Habit
    </Button>
  );
};

export default NewHabitButton;
