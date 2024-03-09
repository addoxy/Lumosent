'use client';

import { Toggle } from '@/components/vendor/toggle';
import { cn, formatDate } from '@/utils/utils';
import { getDayFromDate } from '@/utils/utils';

type DayToggleProps = {
  date: string;
  showDay: boolean;
  completed: boolean;
  dayAlign?: 'top' | 'bottom';
};

// use optimistic updates
const HabitMarker = (props: DayToggleProps) => {
  const { date, showDay, dayAlign, completed } = props;

  return (
    <div className={cn(showDay && 'flex flex-col items-center')}>
      {showDay && (dayAlign === 'top' || !dayAlign) && (
        <span className="mb-2.5 font-medium text-zinc-400">
          {getDayFromDate(date)}
        </span>
      )}
      <Toggle
        pressed={completed}
        className={cn(
          'size-10 rounded-full font-medium',
          completed && 'bg-green-500 font-semibold text-zinc-800',
          !completed && 'bg-zinc-800 text-zinc-200'
        )}
      >
        {formatDate(date, true)}
      </Toggle>
      {showDay && dayAlign === 'bottom' && (
        <span className="mt-2.5 font-medium text-zinc-400">
          {getDayFromDate(date)[0]}
        </span>
      )}
    </div>
  );
};

export default HabitMarker;
