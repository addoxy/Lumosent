import { Skeleton } from '@/components/vendor/skeleton';

const loading = () => {
  return (
    <div className="flex w-full flex-col gap-y-6 sm:mx-auto sm:w-min">
      <Skeleton className="h-20 w-full rounded-xl bg-zinc-900/40 md:w-[640px]" />
      <Skeleton className="h-20 w-full rounded-xl bg-zinc-900/40 md:w-[640px]" />
      <Skeleton className="h-20 w-full rounded-xl bg-zinc-900/40 md:w-[640px]" />
      <Skeleton className="h-20 w-full rounded-xl bg-zinc-900/40 md:w-[640px]" />
      <Skeleton className="h-20 w-full rounded-xl bg-zinc-900/40 md:w-[640px]" />
    </div>
  );
};

export default loading;
