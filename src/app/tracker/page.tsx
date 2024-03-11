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
      {!habits && (
        <p className="mx-auto mt-20 text-lg text-zinc-300">
          &#x1F641; Something went wrong! Please try again later!
        </p>
      )}
      {habits?.length == 0 && (
        <p className="mx-auto mt-20 text-lg text-zinc-300">
          Create a new habit by clicking on the &apos;+ New Habit&apos; button
        </p>
      )}
      {habits && habits.length > 0 && <GridView habits={habits} />}
      {habits && habits.length > 0 && <TableView habits={habits} />}
      {habits && habits.length > 0 && <ColumnView habits={habits} />}
    </div>
  );
};

export default page;
