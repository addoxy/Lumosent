import { Graph } from '../Icons';
import HabitToggle from './HabitToggle';
import HeroCard from './HeroCard';
import { cn, getDatesFromPastWeek } from '@/utils/utils';

export const HeroImage = () => {
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <div className="hidden items-center sm:flex sm:flex-col">
      <div className="flex items-center gap-x-5 rounded-xl bg-zinc-800 px-8 py-6 shadow-lg">
        {datesFromPastWeek.map((date, i) => (
          <HabitToggle date={date} key={i} />
        ))}
      </div>
      <div className="overflow-hidden rounded-b-xl bg-zinc-900 px-5 py-10">
        <div className="grid grid-cols-2 gap-4  ">
          <HeroCard title="Total Habits Logged" data={124} footer="All time" />
          <HeroCard title="Logged Today" data={4} footer="Today" />
          <HeroCard title="Longest streak" data={48} footer="All time" />
          <HeroCard title="Favorite Habit" data="Reading" footer="All time" />
        </div>
      </div>
    </div>
  );
};

export const EasyLoggingImage = ({ className }: { className: string }) => {
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <div
      className={cn(
        'flex w-full flex-col gap-y-5 rounded-xl bg-zinc-900 px-5 py-12 sm:w-fit',
        className
      )}
    >
      <div className="flex flex-col rounded-lg bg-zinc-800 p-6">
        <h3 className="mb-2 text-base font-medium text-zinc-200">Reading</h3>
        <div className="flex flex-wrap gap-5">
          {datesFromPastWeek.map((date) => (
            <HabitToggle date={date} key={date} />
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-zinc-800 p-6">
        <h3 className="mb-2 text-base font-medium text-zinc-200">Meditation</h3>
        <div className="flex flex-wrap gap-5">
          {datesFromPastWeek.map((date) => (
            <HabitToggle date={date} key={date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const StatisticsImage = () => {
  return (
    <div className="flex flex-col gap-y-5 rounded-xl bg-zinc-900 p-5">
      <div className="grid grid-cols-2 gap-5">
        <HeroCard title="Total Habits Logged" data={124} footer="All time" />
        <HeroCard title="Logged Today" data={4} footer="Today" />
        <HeroCard title="Longest streak" data={48} footer="All time" />
        <HeroCard title="Favorite Habit" data="Reading" footer="All time" />
      </div>
      <div className="flex h-32 items-center justify-center rounded-xl bg-zinc-800">
        <Graph className="size-48" />
      </div>
    </div>
  );
};
