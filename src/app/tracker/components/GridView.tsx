import HabitCard from './HabitCard';
import { Habit } from '@/lib/types';

const GridView = ({ habits }: { habits: Habit[] }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {habits.map((habit) => (
        <HabitCard key={habit.id} entries={habit.entries} habit={habit.label} />
      ))}
    </div>
  );
};

export default GridView;
