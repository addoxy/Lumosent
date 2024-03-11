'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const createHabit = async (label: string) => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    await prisma.habit.create({
      data: {
        label: label,
        userId: user.id,
      },
    });

    revalidatePath('/tracker');
    return Promise.resolve({ message: 'Successfully created habit!' });
  } catch (err) {
    return Promise.reject({ message: 'Unable to create habit!' });
  }
};
