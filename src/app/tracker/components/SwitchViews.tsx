'use client';

import { TableIcon, GridIcon, ColumnIcon } from '@/components/Icons';
import { Button } from '@/components/vendor/button';
import { useView } from '@/lib/hooks/use-view';
import { cn } from '@/utils/utils';

const SwitchViews = () => {
  const { view, setView } = useView();

  return (
    <div className="flex gap-x-1.5">
      <Button
        onClick={() => setView('table')}
        variant="outline"
        className={cn(
          'hidden border-zinc-700 px-2 py-1 md:block',
          view === 'table' && 'border-zinc-400'
        )}
      >
        <TableIcon
          className={cn(
            'size-4 text-zinc-700',
            view === 'table' && 'text-zinc-400'
          )}
        />
      </Button>
      <Button
        className={cn(
          'border-zinc-700 px-2 py-1',
          view === 'grid' && 'border-zinc-400'
        )}
        onClick={() => setView('grid')}
        variant="outline"
      >
        <GridIcon
          className={cn(
            'size-4 text-zinc-700',
            view === 'grid' && 'text-zinc-400'
          )}
        />
      </Button>
      <Button
        className={cn(
          'border-zinc-700 px-2 py-1',
          view === 'column' && 'border-zinc-400'
        )}
        onClick={() => setView('column')}
        variant="outline"
      >
        <ColumnIcon
          className={cn(
            'size-4 text-zinc-700',
            view === 'column' && 'text-zinc-400'
          )}
        />
      </Button>
    </div>
  );
};

export default SwitchViews;
