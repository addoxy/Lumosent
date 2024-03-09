import HabitLine from './HabitLine';

const ColumnView = () => {
  return (
    <div className="mx-auto flex w-1/3 flex-col gap-y-10">
      <HabitLine habit="Meditation" />
      <HabitLine habit="Meditation" />
      <HabitLine habit="Meditation" />
      <HabitLine habit="Meditation" />
      <HabitLine habit="Meditation" />
      <HabitLine habit="Meditation" />
      <HabitLine habit="Meditation" />
    </div>
  );
};

export default ColumnView;
