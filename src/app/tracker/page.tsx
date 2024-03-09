import { getHabits } from '../actions/habits';
import ColumnView from './components/ColumnView';
import GridView from './components/GridView';
import TableView from './components/TableView';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/vendor/button';
import { getDatesFromPastWeek } from '@/utils/utils';

const page = async () => {
  const habits = await getHabits();
  const datesFromPastWeek = getDatesFromPastWeek();
  console.log(datesFromPastWeek);
  console.log(habits);

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
        {/* {habits && habits.length > 0 && <GridView habits={habits} />} */}
        {habits && habits.length > 0 && <TableView habits={habits} />}
        {/* {habits && habits.length > 0 && <ColumnView habits={habits} />} */}
      </div>
    </>
  );
};

export default page;
