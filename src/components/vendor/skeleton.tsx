import { cn } from '@/utils/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse', className)} {...props} />;
}

export { Skeleton };
