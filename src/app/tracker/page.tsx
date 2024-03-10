import { getHabits } from '../actions/get-habits';
import ColumnView from './components/ColumnView';
import GridView from './components/GridView';
import NewHabit from './components/NewHabit';
import TableView from './components/TableView';

const page = async () => {
  const habits = await getHabits();

  return (
    <div className="flex flex-col">
      <div className="mb-5 mt-10 flex justify-end">
        <NewHabit />
      </div>
      {habits && habits.length > 0 && <GridView habits={habits} />}
      {/* {habits && habits.length > 0 && <TableView habits={habits} />} */}
      {/* {habits && habits.length > 0 && <ColumnView habits={habits} />} */}
    </div>
  );
};

export default page;
