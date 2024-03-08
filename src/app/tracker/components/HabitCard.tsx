import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';

type GridViewProps = {
  habit: string;
};

const HabitCard = (props: GridViewProps) => {
  const { habit } = props;

  return (
    <Card className="flex flex-col border-zinc-800 bg-zinc-950 px-8 pb-8 pt-7">
      <CardHeader className="mb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-zinc-100">
            {habit}
          </CardTitle>
          <button className="rounded-md p-1 hover:bg-zinc-800">
            <ThreeDotsIcon className="size-4 text-zinc-400" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between">
        <HabitMarker showDay={true} date={10} day="Mon" completed={true} />
        <HabitMarker showDay={true} date={11} day="Tue" completed={false} />
        <HabitMarker showDay={true} date={12} day="Wed" completed={true} />
        <HabitMarker showDay={true} date={13} day="Thur" completed={true} />
        <HabitMarker showDay={true} date={14} day="Fri" completed={false} />
        <HabitMarker showDay={true} date={15} day="Sat" completed={false} />
        <HabitMarker showDay={true} date={16} day="Sun" completed={true} />
      </CardContent>
    </Card>
  );
};

export default HabitCard;
