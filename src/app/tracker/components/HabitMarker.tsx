'use client';

import { Toggle } from '@/components/vendor/toggle';
import { cn } from '@/utils/utils';
import { useState } from 'react';

type DayToggleProps = {
  date: number;
  day: string;
  completed: boolean;
  showDay: boolean;
  dayAlign?: 'top' | 'bottom';
};

// use optimistic updates
const HabitMarker = (props: DayToggleProps) => {
  const { date, day, showDay, dayAlign } = props;
  const [completed, setCompleted] = useState(props.completed);

  return (
    <div className={cn(showDay && 'flex flex-col items-center')}>
      {showDay && (dayAlign === 'top' || !dayAlign) && (
        <span className="mb-2.5 font-medium text-zinc-400">{day}</span>
      )}
      <Toggle
        pressed={completed}
        onPressedChange={setCompleted}
        className={cn(
          'size-10 rounded-full font-medium',
          !completed && 'bg-zinc-700 text-zinc-300',
          completed && 'bg-green-500 text-zinc-800'
        )}
      >
        {date}
      </Toggle>
      {showDay && dayAlign === 'bottom' && (
        <span className="mt-2.5 font-medium text-zinc-400">{day}</span>
      )}
    </div>
  );
};

export default HabitMarker;
