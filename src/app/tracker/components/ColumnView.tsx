import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import { Habit } from '@/lib/types';
import { HabitProps } from '@/lib/types';
import { dateToString, getDatesFromPastWeek } from '@/utils/utils';

const ColumnView = ({ habits }: { habits: Habit[] }) => {
  return (
    <div className="mx-auto flex w-1/3 flex-col gap-y-10">
      {habits.map((habit) => (
        <HabitLine key={habit.id} entries={habit.entries} habit={habit.label} />
      ))}
    </div>
  );
};

const HabitLine = (props: HabitProps) => {
  const { habit, entries } = props;
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <div className="flex flex-col">
      <div className="mb-6 flex justify-between">
        <h3 className="text-base text-zinc-200">{habit}</h3>
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
              !!entries.find(
                (entry) => dateToString(entry.completedAt) === date
              )
            }
            showDay={true}
            dayAlign="bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default ColumnView;
