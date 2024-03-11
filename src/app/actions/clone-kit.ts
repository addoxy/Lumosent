'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const cloneKit = async (habits: string[]) => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    await prisma.habit.createMany({
      data: habits.map((habit) => ({
        label: habit,
        userId: user.id,
      })),
      skipDuplicates: true,
    });

    revalidatePath('/tracker');
    return Promise.resolve({ message: 'Successfully created new habits!' });
  } catch (err) {
    return Promise.resolve({ message: 'Unable to create new habits!' });
  }
};
