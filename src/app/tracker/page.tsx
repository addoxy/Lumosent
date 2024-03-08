import HabitCard from './components/HabitCard';
import HabitLine from './components/HabitLine';
import HabitRow from './components/HabitRow';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/vendor/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/vendor/table';

const page = () => {
  return (
    <>
      <Navbar title="Tracker" />
      <div className="flex flex-col">
        <div className="mb-5 mt-10 flex justify-end">
          <Button
            variant="outline"
            className="border-zinc-800 text-zinc-200 hover:bg-zinc-900"
          >
            + New Habit
          </Button>
        </div>
        {/* grid view */}
        {/* <div className="grid grid-cols-2 gap-6">
          <HabitCard habit="Meditation" />
          <HabitCard habit="Meditation" />
          <HabitCard habit="Meditation" />
          <HabitCard habit="Meditation" />
        </div> */}
        {/* table view */}
        {/* <Table>
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
        </Table> */}
        {/* Column View */}
        <div className="mx-auto flex w-1/3 flex-col gap-y-10">
          <HabitLine habit="Meditation" />
          <HabitLine habit="Meditation" />
          <HabitLine habit="Meditation" />
          <HabitLine habit="Meditation" />
          <HabitLine habit="Meditation" />
          <HabitLine habit="Meditation" />
          <HabitLine habit="Meditation" />
        </div>
      </div>
    </>
  );
};

export default page;
