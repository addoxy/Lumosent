import { Skeleton } from '@/components/vendor/skeleton';

const loading = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-6">
      <Skeleton className="h-20 w-[640px] rounded-xl bg-zinc-900/40" />
      <Skeleton className="h-20 w-[640px] rounded-xl bg-zinc-900/40" />
      <Skeleton className="h-20 w-[640px] rounded-xl bg-zinc-900/40" />
      <Skeleton className="h-20 w-[640px] rounded-xl bg-zinc-900/40" />
      <Skeleton className="h-20 w-[640px] rounded-xl bg-zinc-900/40" />
    </div>
  );
};

export default loading;
