import HabitRow from './HabitRow';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/vendor/table';
import { Habit } from '@/lib/types';
import { getDatesFromPastWeek, getDayFromDate } from '@/utils/utils';

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

export default TableView;
