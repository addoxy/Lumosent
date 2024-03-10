import { getHabits } from '../actions/get-habits';
import { postHabit } from '../actions/post-habit';
import ColumnView from './components/ColumnView';
import GridView from './components/GridView';
import NewHabitButton from './components/NewHabitButton';
import TableView from './components/TableView';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/vendor/button';
import { getDatesFromPastWeek } from '@/utils/utils';

const page = async () => {
  const habits = await getHabits();

  return (
    <>
      <Navbar title="Tracker" />
      <div className="flex flex-col">
        <div className="mb-5 mt-10 flex justify-end">
          <NewHabitButton />
        </div>
        {habits && habits.length > 0 && <GridView habits={habits} />}
        {/* {habits && habits.length > 0 && <TableView habits={habits} />} */}
        {/* {habits && habits.length > 0 && <ColumnView habits={habits} />} */}
      </div>
    </>
  );
};

export default page;
