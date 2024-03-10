'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';

export const getHabits = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  try {
    const habits = await prisma.habit.findMany({
      where: {
        userId: user.id,
      },
      include: {
        entries: true,
      },
    });

    return habits;
  } catch (err) {
    ServerResponse('Server error', 500);
    return null;
  }
};

export const getHabitMetrics = async (habitId: string) => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  try {
    const metrics = await prisma.habitEntry.findMany({
      where: {
        habitId: habitId,
      },
    });

    return metrics;
  } catch (err) {
    ServerResponse('Server error', 500);
    return null;
  }
};
