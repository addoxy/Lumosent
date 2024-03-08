'use client';

import { Toggle } from '@/components/vendor/toggle';
import { cn } from '@/utils/utils';
import { useState } from 'react';

type DayToggleProps = {
  date: number;
  day: string;
  completed: boolean;
};

// use optimistic updates
const HabitMarker = (props: DayToggleProps) => {
  const { date, day } = props;
  const [completed, setCompleted] = useState(props.completed);

  return (
    <div className="flex flex-col items-center">
      <span className="mb-2.5 font-medium text-zinc-400">{day}</span>
      <Toggle
        pressed={completed}
        onPressedChange={setCompleted}
        className={cn(
          'relative size-10 rounded-full font-medium',
          !completed && 'bg-zinc-700 text-zinc-300',
          completed && 'bg-green-500 text-zinc-800'
        )}
      >
        {date}
      </Toggle>
    </div>
  );
};

export default HabitMarker;
