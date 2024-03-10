'use client';

import { cloneKit } from '@/app/actions/clone-kit';
import { Button } from '@/components/vendor/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

type KitProps = {
  id: string;
  name: string;
  description: string | null;
  habits: string[];
};

const Kit = (props: KitProps) => {
  const { description, habits, id, name } = props;
  const [isPending, setTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async () => {
    setTransition(() => {
      cloneKit(habits).then((data) => {
        if (data.success) {
          console.log(data.success);
          router.push('/tracker');
        } else if (data.error) {
          console.log(data.error);
        }
      });
    });
  };

  return (
    <Card className="flex flex-col justify-between border-zinc-800 bg-zinc-900 px-8 py-6">
      <div className="mb-6">
        <CardHeader className="mb-4">
          <CardTitle className="mb-1 text-lg font-medium text-zinc-200">
            {name}
          </CardTitle>
          <CardDescription className="text-base font-normal text-zinc-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4 className="mb-1 text-zinc-300">Habits:</h4>
          <ul className="list-inside list-disc space-y-1 text-zinc-300">
            {habits.map((habit, i) => (
              <li key={i}>{habit}</li>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter>
        <Button
          onClick={handleSubmit}
          className="w-full bg-zinc-200 font-semibold text-zinc-800 hover:bg-zinc-400"
          disabled={isPending}
        >
          Get starer kit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Kit;
