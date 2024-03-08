import Navbar from '@/components/Navbar';
import { Button } from '@/components/vendor/button';

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar title="Tracker" />
      <div className="mb-5 mt-10 flex justify-between">
        <h2 className="text-xl font-medium text-zinc-200">Your Habits</h2>
        <Button
          variant="outline"
          className="border-zinc-800 text-zinc-200 hover:bg-zinc-900"
        >
          + New Habit
        </Button>
      </div>
    </div>
  );
};

export default page;
