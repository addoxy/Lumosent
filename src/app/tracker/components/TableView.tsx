'use client';

import HabitMarker from './HabitMarker';
import HabitDropdown from './HabitMenu';
import TextTooltip from '@/components/TextTooltip';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/vendor/table';
import { useView } from '@/lib/hooks/use-view';
import { Habit } from '@/lib/types';
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
          <TableRow key={habit.id} className="h-24 border-b-zinc-900">
            <TableCell className="w-2/5 text-zinc-200">
              <TextTooltip text={habit.label} className="text-zinc-100" />
            </TableCell>
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
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
