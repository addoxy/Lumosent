'use client';

import { Switch } from '@/components/vendor/switch';
import { Toggle } from '@/components/vendor/toggle';
import { useView } from '@/lib/hooks/use-view';
import { cn } from '@/utils/utils';

const SettingsPage = () => {
  const { view, setView } = useView();

  return (
    <div className="flex flex-col sm:mx-auto">
      <section>
        <h2 className="mb-3 text-lg font-medium text-zinc-200">Views</h2>
        <p className="mb-4 text-zinc-400">
          Choose the type of view you want for your habits
        </p>
        <div className="grid grid-cols-1 place-items-center gap-y-6 sm:flex sm:gap-x-6 sm:gap-y-0">
          <div className="flex flex-col">
            <h3 className="mb-2 font-medium text-zinc-400">Table</h3>
            <Toggle
              pressed={view === 'table'}
              onPressedChange={() => setView('table')}
              className={cn(
                'size-40 rounded-md bg-zinc-800 p-1.5',
                view === 'table' && 'border border-zinc-200'
              )}
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-zinc-950">
                <TableView />
              </div>
            </Toggle>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 font-medium text-zinc-400">Grid</h3>
            <Toggle
              pressed={view === 'grid'}
              onPressedChange={() => setView('grid')}
              className={cn(
                'size-40 rounded-md bg-zinc-800 p-1.5',
                view === 'grid' && 'border border-zinc-200'
              )}
            >
              <div className="flex h-full w-full flex-col rounded-md bg-zinc-950">
                <div className="grid grid-cols-2 gap-1 p-2">
                  <GridPreview />
                  <GridPreview />
                  <GridPreview />
                  <GridPreview />
                </div>
              </div>
            </Toggle>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-400">Column</h3>
            <Toggle
              pressed={view === 'column'}
              onPressedChange={() => setView('column')}
              className={cn(
                'size-40 rounded-md bg-zinc-800 p-1.5',
                view === 'column' && 'border border-zinc-200'
              )}
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-zinc-950">
                <MobileView />
              </div>
            </Toggle>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <h2 className="mb-3 text-lg font-medium text-zinc-200">Theme</h2>
        <p className="mb-4 text-zinc-400">Choose your preferred theme</p>
        <div className="flex items-center justify-between">
          <span className="text-zinc-400">Dark Mode</span>
          <Switch
            checked={true}
            className="bg-zinc-900 data-[state=checked]:bg-zinc-200"
          />
        </div>
      </section>
    </div>
  );
};

const GridPreview = () => {
  return <div className="h-10 rounded-sm bg-zinc-800" />;
};

const TableView = () => {
  return (
    <div className="divide-y-zinc-700 flex flex-col gap-y-3">
      <div className="mx-auto grid grid-cols-4 gap-3 border-b border-zinc-700 pb-3">
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
      </div>
      <div className="mx-auto grid grid-cols-4 gap-3 border-b border-zinc-700 pb-3">
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
      </div>
      <div className="mx-auto grid grid-cols-4 gap-3">
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
      </div>
    </div>
  );
};

const MobileView = () => {
  return (
    <div className="divide-y-zinc-700 flex flex-col gap-y-3">
      <div className="mx-auto grid grid-cols-4 gap-3">
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
      </div>
      <div className="mx-auto grid grid-cols-4 gap-3">
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
      </div>
      <div className="mx-auto grid grid-cols-4 gap-3">
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
      </div>
      <div className="mx-auto grid grid-cols-4 gap-3">
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
        <div className="size-3 rounded-full bg-zinc-700/80" />
      </div>
    </div>
  );
};

export default SettingsPage;
