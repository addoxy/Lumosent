'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';

export const getHabits = async () => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
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
    return Promise.reject({ message: 'Invalid account!' });
  }
};
