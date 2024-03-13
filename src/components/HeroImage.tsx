import { Graph } from './Icons';
import { Toggle } from './vendor/toggle';
import {
  cn,
  formatDate,
  getDatesFromPastWeek,
  getDayFromDate,
} from '@/utils/utils';

const HeroImage = () => {
  const datesFromPastWeek = getDatesFromPastWeek();

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-x-5 rounded-xl bg-zinc-800 px-8 py-6 shadow-lg">
        {datesFromPastWeek.map((date, i) => (
          <HabitToggle date={date} key={i} />
        ))}
      </div>
      <div className="w-10/12 overflow-hidden rounded-b-xl bg-zinc-900 px-5 py-12">
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

type HeroCardProps = {
  title: string;
  data: string | number;
  footer: string;
};

const HeroCard = (props: HeroCardProps) => {
  const { data, footer, title } = props;

  return (
    <div className="rounded-xl bg-zinc-800 px-4 py-3">
      <div className="flex flex-col">
        <h3 className="text-sm text-zinc-300">{title}</h3>
        <span className="text-base text-zinc-100">{data}</span>
        <span className="text-xs text-zinc-500">{footer}</span>
      </div>
    </div>
  );
};

const HabitToggle = ({ date }: { date: string }) => {
  const getRandomBoolean = () => {
    return Math.random() >= 0.5;
  };

  const completed = getRandomBoolean();

  return (
    <div className="flex flex-col items-center">
      <span className="mb-2.5 font-medium text-zinc-400">
        {getDayFromDate(date)}
      </span>
      <Toggle
        pressed={completed}
        className={cn(
          'size-10 rounded-full bg-zinc-700 font-medium text-zinc-200 data-[state=on]:bg-green-500 data-[state=on]:font-semibold data-[state=on]:text-zinc-800'
        )}
      >
        {formatDate(date, true)}
      </Toggle>
    </div>
  );
};

export default HeroImage;
