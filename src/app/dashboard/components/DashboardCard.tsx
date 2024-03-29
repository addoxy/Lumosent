import {
  CheckIcon,
  FireIcon,
  GoldIcon,
  HeartIcon,
} from '../../../components/Icons';
import TextTooltip from '@/components/TextTooltip';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/vendor/tooltip';

type DashboardCardProps = {
  title: string;
  data: string;
  footer: string;
  icon: 'check' | 'fire' | 'gold' | 'heart';
};

const DashboardCard = (props: DashboardCardProps) => {
  const { data, footer, icon, title } = props;

  return (
    <Card className="flex flex-col rounded-xl border-zinc-800 px-6 py-5 font-medium text-zinc-200">
      <CardHeader className="mb-2 w-full">
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          {icon === 'check' && <CheckIcon className="size-2.5" />}
          {icon === 'fire' && <FireIcon className="size-2.5" />}
          {icon === 'gold' && <GoldIcon className="size-2.5" />}
          {icon === 'heart' && <HeartIcon className="size-2.5" />}
        </div>
      </CardHeader>
      <CardContent className="mb-1">
        <TextTooltip text={data} className="text-3xl text-zinc-50" />
      </CardContent>
      <CardFooter className="text-xs text-zinc-400">{footer}</CardFooter>
    </Card>
  );
};

export default DashboardCard;
