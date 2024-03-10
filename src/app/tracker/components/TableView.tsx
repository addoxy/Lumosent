'use client';

import HabitDropdown from './HabitDropdown';
import HabitMarker from './HabitMarker';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/vendor/table';
import { useView } from '@/lib/hooks/use-view';
import { Habit, HabitProps } from '@/lib/types';
import {
  cn,
  dateToString,
  getDatesFromPastWeek,
  getDayFromDate,
} from '@/utils/utils';

const TableView = ({ habits }: { habits: Habit[] }) => {
  const { view } = useView();
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <Table className={cn(view !== 'table' && 'hidden')}>
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
          <HabitRow key={habit.id} habit={habit} />
        ))}
      </TableBody>
    </Table>
  );
};

const HabitRow = (props: HabitProps) => {
  const { habit } = props;
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <TableRow className="h-24 border-b-zinc-900">
      <TableCell className="text-zinc-200">{habit.label}</TableCell>
      {datesFromPastWeek.map((date, i) => (
        <TableCell key={i} className="text-center">
          <HabitMarker
            date={date}
            completed={
              !!habit.entries.find(
                (entry) => dateToString(entry.completedAt) === date
              )
            }
            showDay={false}
            habitId={habit.id}
          />
        </TableCell>
      ))}
      <TableCell>
        <HabitDropdown habit={habit} />
      </TableCell>
    </TableRow>
  );
};

export default TableView;
