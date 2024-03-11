'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const renameHabit = async (habitId: string, newName: string) => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    await prisma.habit.update({
      where: {
        id: habitId,
      },
      data: {
        label: newName,
      },
    });

    revalidatePath('/tracker');
    revalidatePath('/dashboard');
    return Promise.resolve({ message: 'Successfully renamed habit!' });
  } catch (err) {
    return Promise.reject({ message: 'Unable to rename habit!' });
  }
};
