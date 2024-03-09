import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import { TableCell, TableRow } from '@/components/vendor/table';
import { HabitProps } from '@/lib/types';
import { dateToString, getDatesFromPastWeek } from '@/utils/utils';

const HabitRow = (props: HabitProps) => {
  const { habit, entries } = props;
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <TableRow className="h-24 border-b-zinc-900">
      <TableCell className="text-zinc-200">{habit}</TableCell>
      {datesFromPastWeek.map((date, i) => (
        <TableCell key={i} className="text-center">
          <HabitMarker
            date={date}
            completed={
              !!entries.find(
                (entry) => dateToString(entry.completedAt) === date
              )
            }
            showDay={false}
          />
        </TableCell>
      ))}
      <TableCell>
        <button className="rounded-md p-1 hover:bg-zinc-800">
          <ThreeDotsIcon className="size-4 text-zinc-400" />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default HabitRow;
