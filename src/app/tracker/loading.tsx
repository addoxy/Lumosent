import { Skeleton } from '@/components/vendor/skeleton';

const loading = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-5 mt-10 flex justify-end">
        <Skeleton className="h-9 w-32 justify-end rounded-md bg-zinc-900/40" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Skeleton className="h-44 w-full rounded-xl bg-zinc-900/40" />
        <Skeleton className="h-44 w-full rounded-xl bg-zinc-900/40" />
        <Skeleton className="hidden h-44 w-full rounded-xl bg-zinc-900/40 md:block" />
        <Skeleton className="hidden h-44 w-full rounded-xl bg-zinc-900/40 md:block" />
      </div>
    </div>
  );
};

export default loading;
