import ColumnView from './components/ColumnView';
import GridView from './components/GridView';
import TableView from './components/TableView';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/vendor/button';

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
        <GridView />
        {/* table view */}
        {/* <TableView /> */}
        {/* Column View */}
        {/* <ColumnView /> */}
      </div>
    </>
  );
};

export default page;
