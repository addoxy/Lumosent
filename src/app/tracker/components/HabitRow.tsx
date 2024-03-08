import HabitMarker from './HabitMarker';
import { ThreeDotsIcon } from '@/components/Icons';
import { TableCell, TableRow } from '@/components/vendor/table';

type HabitRowProps = {
  habit: string;
};

const HabitRow = (props: HabitRowProps) => {
  const { habit } = props;

  return (
    <TableRow className="h-24 border-b-zinc-900">
      <TableCell className="w-2/5 text-zinc-200">{habit}</TableCell>
      <TableCell>
        <HabitMarker showDay={false} date={10} day="Mon" completed={true} />
      </TableCell>
      <TableCell>
        <HabitMarker showDay={false} date={10} day="Mon" completed={false} />
      </TableCell>
      <TableCell>
        <HabitMarker showDay={false} date={10} day="Mon" completed={true} />
      </TableCell>
      <TableCell>
        <HabitMarker showDay={false} date={10} day="Mon" completed={false} />
      </TableCell>
      <TableCell>
        <HabitMarker showDay={false} date={10} day="Mon" completed={false} />
      </TableCell>
      <TableCell>
        <HabitMarker showDay={false} date={10} day="Mon" completed={true} />
      </TableCell>
      <TableCell>
        <HabitMarker showDay={false} date={10} day="Mon" completed={true} />
      </TableCell>
      <TableCell>
        <button className="rounded-md p-1 hover:bg-zinc-800">
          <ThreeDotsIcon className="size-4 text-zinc-400" />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default HabitRow;
