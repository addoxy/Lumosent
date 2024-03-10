'use client';

import HabitDropdown from './HabitDropdown';
import HabitMarker from './HabitMarker';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';
import { useView } from '@/lib/hooks/use-view';
import { Habit, HabitProps } from '@/lib/types';
import { cn, dateToString, getDatesFromPastWeek } from '@/utils/utils';

const GridView = ({ habits }: { habits: Habit[] }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

const HabitCard = (props: HabitProps) => {
  const { habit } = props;
  const { view } = useView();
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <Card
      className={cn(
        'flex flex-col border-zinc-800 bg-zinc-950 px-8 pb-8 pt-7',
        view !== 'grid' && 'hidden'
      )}
    >
      <CardHeader className="mb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-zinc-100">
            {habit.label}
          </CardTitle>
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
  );
};

export default GridView;
