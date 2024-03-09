import HabitLine from './HabitLine';
import { Habit } from '@/lib/types';

const ColumnView = ({ habits }: { habits: Habit[] }) => {
  return (
    <div className="mx-auto flex w-1/3 flex-col gap-y-10">
      {habits.map((habit) => (
        <HabitLine key={habit.id} entries={habit.entries} habit={habit.label} />
      ))}
    </div>
  );
};

export default ColumnView;
