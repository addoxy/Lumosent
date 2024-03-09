import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import { HabitProps } from '@/lib/types';
import { dateToString, getDatesFromPastWeek } from '@/utils/utils';

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

export default HabitLine;
