'use client';

import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import { useView } from '@/lib/hooks/use-view';
import { Habit } from '@/lib/types';
import { HabitProps } from '@/lib/types';
import { cn, dateToString, getDatesFromPastWeek } from '@/utils/utils';

const ColumnView = ({ habits }: { habits: Habit[] }) => {
  const { view } = useView();

  return (
    <div
      className={cn(
        'mx-auto flex w-1/3 flex-col gap-y-10',
        view !== 'mobile' && 'hidden'
      )}
    >
      {habits.map((habit) => (
        <HabitLine key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

const HabitLine = (props: HabitProps) => {
  const { habit } = props;
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <div className="flex flex-col">
      <div className="mb-6 flex justify-between">
        <h3 className="text-base text-zinc-200">{habit.label}</h3>
        <button className="rounded-md p-1 hover:bg-zinc-800">
          <ThreeDotsIcon className="size-4 text-zinc-400" />
        </button>
      </div>
      <div className="flex justify-between">
        {datesFromPastWeek.map((date, i) => (
          <HabitMarker
            date={date}
            key={i}
            completed={
              !!habit.entries.find(
                (entry) => dateToString(entry.completedAt) === date
              )
            }
            showDay={true}
            habitId={habit.id}
            dayAlign="bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default ColumnView;
