'use client';

import { addLog, removeLog } from '@/app/actions/toggle-habit';
import { Toggle } from '@/components/vendor/toggle';
import { useView } from '@/lib/hooks/use-view';
import { cn, formatDate } from '@/utils/utils';
import { getDayFromDate } from '@/utils/utils';
import { parseISO } from 'date-fns';
import { useTransition } from 'react';
import { toast } from 'sonner';

type HabitMarkerProps = {
  date: string;
  showDay: boolean;
  completed: boolean;
  dayAlign?: 'top' | 'bottom';
  habitId: string;
};

const HabitMarker = (props: HabitMarkerProps) => {
  const { date, showDay, dayAlign, completed, habitId } = props;
  const [isPending, startTransition] = useTransition();
  const { view } = useView();

  const handleToggle = () => {
    startTransition(() => {
      if (!completed) {
        toast.promise(addLog(habitId, parseISO(date + 'T00:00:00Z')), {
          error: 'Unable to add log!',
        });
      } else {
        toast.promise(removeLog(habitId, parseISO(date + 'T00:00:00Z')), {
          error: 'Unable to remove log!',
        });
      }
    });
  };

  return (
    <div className={cn(showDay && 'flex flex-col items-center')}>
      {showDay && (dayAlign === 'top' || !dayAlign) && (
        <span className="mb-2.5 font-medium text-zinc-400">
          {getDayFromDate(date)}
        </span>
      )}
      <Toggle
        pressed={completed}
        onPressedChange={handleToggle}
        className={cn(
          'size-10 rounded-full font-medium',
          !completed && 'bg-zinc-800 text-zinc-200',
          view === 'grid' && !completed && 'bg-zinc-700',
          completed && 'bg-green-500 font-semibold text-zinc-800'
        )}
        disabled={isPending}
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
