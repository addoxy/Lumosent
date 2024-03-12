import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/vendor/tooltip';
import { cn } from '@/utils/utils';

type TextTooltipProps = {
  text: string;
  className?: string;
};

const TextTooltip = (props: TextTooltipProps) => {
  const { className, text } = props;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="line-clamp-1">
          <p className={cn('line-clamp-1 text-left', className)}>{text}</p>
        </TooltipTrigger>
        <TooltipContent className="bg-zinc-800 text-zinc-50">
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TextTooltip;
