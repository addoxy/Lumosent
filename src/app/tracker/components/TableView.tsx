import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/vendor/table';
import { Habit } from '@/lib/types';
import { HabitProps } from '@/lib/types';
import {
  getDatesFromPastWeek,
  getDayFromDate,
  dateToString,
} from '@/utils/utils';

const TableView = ({ habits }: { habits: Habit[] }) => {
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <Table>
      <TableHeader className="text-zinc-400">
        <TableRow className="h-20 border-b-zinc-900">
          <TableHead className="w-2/5">Habits</TableHead>
          {datesFromPastWeek.map((date) => (
            <TableHead key={date} className="text-center">
              {getDayFromDate(date)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {habits.map((habit) => (
          <HabitRow
            key={habit.id}
            entries={habit.entries}
            habit={habit.label}
          />
        ))}
      </TableBody>
    </Table>
  );
};

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

export default TableView;
