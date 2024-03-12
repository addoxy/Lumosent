'use client';

import { cloneKit } from '@/app/actions/clone-kit';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/vendor/accordion';
import { Button } from '@/components/vendor/button';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

type KitProps = {
  id: string;
  name: string;
  description: string | null;
  habits: string[];
};

const StarterKit = (props: KitProps) => {
  const { description, habits, id, name } = props;
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = () => {
    startTransition(() => {
      toast.promise(cloneKit(habits), {
        loading: 'Creating new habits...',
        success: (data) => {
          router.push('/tracker');
          return `${data.message}`;
        },
        error: (data) => `${data.message}`,
      });
    });
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={name} className="border-b-zinc-800 pb-2">
        <AccordionTrigger className="text-zinc-200">{name}</AccordionTrigger>
        <AccordionContent className="text-zinc-300">
          <div className="flex flex-col">
            <p className="mb-3">{description}</p>
            <p className="mb-4 leading-6">
              <span className="font-medium">Habits:</span> {habits.join(', ')}
            </p>
          </div>
          <Button
            disabled={isPending}
            onClick={handleSubmit}
            variant="link"
            className="p-0 underline"
          >
            Get starter kit -{'>'}
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default StarterKit;
