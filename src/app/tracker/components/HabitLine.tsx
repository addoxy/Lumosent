import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';

type HabitLineProps = {
  habit: string;
};

const HabitLine = (props: HabitLineProps) => {
  const { habit } = props;

  return (
    <div className="flex flex-col">
      <div className="mb-6 flex justify-between">
        <h3 className="text-base text-zinc-200">{habit}</h3>
        <button className="rounded-md p-1 hover:bg-zinc-800">
          <ThreeDotsIcon className="size-4 text-zinc-400" />
        </button>
      </div>
      <div className="flex justify-between">
        <HabitMarker
          showDay={true}
          dayAlign="bottom"
          date={10}
          day="M"
          completed={false}
        />
        <HabitMarker
          showDay={true}
          dayAlign="bottom"
          date={10}
          day="M"
          completed={false}
        />
        <HabitMarker
          showDay={true}
          dayAlign="bottom"
          date={10}
          day="M"
          completed={false}
        />
        <HabitMarker
          showDay={true}
          dayAlign="bottom"
          date={10}
          day="M"
          completed={false}
        />
        <HabitMarker
          showDay={true}
          dayAlign="bottom"
          date={10}
          day="M"
          completed={false}
        />
        <HabitMarker
          showDay={true}
          dayAlign="bottom"
          date={10}
          day="M"
          completed={false}
        />
        <HabitMarker
          showDay={true}
          dayAlign="bottom"
          date={10}
          day="M"
          completed={false}
        />
      </div>
    </div>
  );
};

export default HabitLine;
