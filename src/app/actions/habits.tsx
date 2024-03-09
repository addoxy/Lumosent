'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';

export const getHabits = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const habits = await prisma.habit.findMany({
    where: {
      userId: user.id,
    },
    include: {
      entries: true,
    },
  });

  return habits;
};

export const getHabitMetrics = async (habitId: string) => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const metrics = await prisma.habitEntry.findMany({
    where: {
      habitId: habitId,
    },
  });

  return metrics;
};
