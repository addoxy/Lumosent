import { Skeleton } from '@/components/vendor/skeleton';

const loading = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="w-full rounded-xl bg-zinc-900/40" />
        <Skeleton className="w-full rounded-xl bg-zinc-900/40" />
        <Skeleton className="hidden h-32 w-full rounded-xl bg-zinc-900/40 sm:block" />
        <Skeleton className="hidden w-full rounded-xl bg-zinc-900/40 md:block" />
      </div>
      <Skeleton className="h-96 w-full rounded-xl bg-zinc-900/40" />
    </div>
  );
};

export default loading;
