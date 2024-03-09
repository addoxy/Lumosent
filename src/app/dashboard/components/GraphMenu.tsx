'use client';

import { Button } from '@/components/vendor/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';

const GraphMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-zinc-800 hover:bg-zinc-900">
          Monthly
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-1 w-20 border border-zinc-800 bg-zinc-900 font-medium"
      >
        <DropdownMenuItem className="h-9 cursor-pointer hover:bg-zinc-800">
          Weekly
        </DropdownMenuItem>
        <DropdownMenuItem className="h-9 cursor-pointer hover:bg-zinc-800">
          Yearly
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GraphMenu;
