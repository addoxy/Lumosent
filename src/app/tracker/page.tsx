import HabitCard from './components/HabitCard';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/vendor/button';

const page = () => {
  return (
    <>
      <Navbar title="Tracker" />
      <div className="flex flex-col px-16">
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
      </div>
    </>
  );
};

export default page;
