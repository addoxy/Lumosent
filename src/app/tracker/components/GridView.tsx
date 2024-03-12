'use client';

import HabitMarker from './HabitMarker';
import HabitDropdown from './HabitMenu';
import TextTooltip from '@/components/TextTooltip';
import { Card, CardContent, CardHeader } from '@/components/vendor/card';
import { useView } from '@/lib/hooks/use-view';
import { Habit } from '@/lib/types';
import { cn, dateToString, getDatesFromPastWeek } from '@/utils/utils';

const GridView = ({ habits }: { habits: Habit[] }) => {
  const { view } = useView();
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <div className="mx-auto grid max-w-screen-sm grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
      {habits.map((habit) => (
        <Card
          key={habit.id}
          className={cn(
            'flex flex-col border-zinc-800 bg-zinc-900 px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7',
            view !== 'grid' && 'hidden'
          )}
        >
          <CardHeader className="mb-6 ">
            <div className="flex items-center justify-between">
              <TextTooltip
                text={habit.label}
                className="text-base font-medium text-zinc-100"
              />
              <HabitDropdown habit={habit} />
            </div>
          </CardHeader>
          <CardContent className="flex justify-between">
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
              />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GridView;
