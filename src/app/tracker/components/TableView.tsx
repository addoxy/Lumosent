import HabitRow from './HabitRow';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/vendor/table';

const TableView = () => {
  return (
    <Table>
      <TableHeader className="text-zinc-400">
        <TableRow className="h-20 border-b-zinc-900">
          <TableHead className="w-2/5">Habits</TableHead>
          <TableHead>Mon</TableHead>
          <TableHead>Tue</TableHead>
          <TableHead>Wed</TableHead>
          <TableHead>Thur</TableHead>
          <TableHead>Fri</TableHead>
          <TableHead>Sat</TableHead>
          <TableHead>Sun</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <HabitRow habit="Meditation" />
        <HabitRow habit="Meditation" />
      </TableBody>
    </Table>
  );
};

export default TableView;
