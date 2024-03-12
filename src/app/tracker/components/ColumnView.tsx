'use client';

import HabitMarker from './HabitMarker';
import HabitDropdown from './HabitMenu';
import TextTooltip from '@/components/TextTooltip';
import { useView } from '@/lib/hooks/use-view';
import { Habit } from '@/lib/types';
import { cn, dateToString, getDatesFromPastWeek } from '@/utils/utils';

const ColumnView = ({ habits }: { habits: Habit[] }) => {
  const { view } = useView();
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-screen-md flex-col gap-y-10 divide-y divide-zinc-900 sm:w-2/3 lg:w-1/2',
        view !== 'column' && 'hidden',
        view === 'table' && 'flex flex-col md:hidden'
      )}
    >
      {habits.map((habit) => (
        <div key={habit.id} className="flex flex-col pt-10 first-of-type:pt-0">
          <div className="mb-6 flex justify-between">
            <TextTooltip
              text={habit.label}
              className="font-medium text-zinc-100"
            />
            <HabitDropdown habit={habit} />
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
      ))}
    </div>
  );
};

export default ColumnView;
