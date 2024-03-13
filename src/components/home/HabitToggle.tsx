'use client';

import { Toggle } from '../vendor/toggle';
import { getDayFromDate, formatDate } from '@/utils/utils';
import { useState } from 'react';

const HabitToggle = ({ date }: { date: string }) => {
  const getRandomBoolean = () => {
    return Math.random() >= 0.5;
  };

  const [pressed, setPressed] = useState(getRandomBoolean());

  return (
    <div className="flex flex-col items-center">
      <span className="mb-2.5 font-medium text-zinc-400">
        {getDayFromDate(date)}
      </span>
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        className="
          size-10 rounded-full bg-zinc-700 font-medium text-zinc-200 data-[state=on]:bg-green-500 data-[state=on]:font-semibold data-[state=on]:text-zinc-800"
      >
        {formatDate(date, true)}
      </Toggle>
    </div>
  );
};

export default HabitToggle;
