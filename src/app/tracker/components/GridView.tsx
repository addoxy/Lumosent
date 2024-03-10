import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';
import { Habit } from '@/lib/types';
import { HabitProps } from '@/lib/types';
import { dateToString, getDatesFromPastWeek } from '@/utils/utils';

const GridView = ({ habits }: { habits: Habit[] }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {habits.map((habit) => (
        <HabitCard key={habit.id} entries={habit.entries} habit={habit.label} />
      ))}
    </div>
  );
};

const HabitCard = (props: HabitProps) => {
  const { habit, entries } = props;
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <Card className="flex flex-col border-zinc-800 bg-zinc-950 px-8 pb-8 pt-7">
      <CardHeader className="mb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-zinc-100">
            {habit}
          </CardTitle>
          <button className="rounded-md p-1 hover:bg-zinc-800">
            <ThreeDotsIcon className="size-4 text-zinc-400" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between">
        {datesFromPastWeek.map((date, i) => (
          <HabitMarker
            date={date}
            key={i}
            completed={
              !!entries.find(
                (entry) => dateToString(entry.completedAt) === date
              )
            }
            showDay={true}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default GridView;
