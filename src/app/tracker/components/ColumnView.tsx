'use client';

import HabitMarker from './HabitMarker';
import HabitDropdown from './HabitMenu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/vendor/tooltip';
import { useView } from '@/lib/hooks/use-view';
import { Habit, HabitProps } from '@/lib/types';
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="line-clamp-1">
              <p className="line-clamp-1 text-left">{habit.label}</p>
            </TooltipTrigger>
            <TooltipContent className="bg-zinc-800 text-zinc-50">
              {habit.label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
  );
};

export default ColumnView;
