import HabitCard from './HabitCard';

const GridView = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <HabitCard habit="Meditation" />
      <HabitCard habit="Meditation" />
      <HabitCard habit="Meditation" />
      <HabitCard habit="Meditation" />
    </div>
  );
};

export default GridView;
