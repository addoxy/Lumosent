'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const deleteHabit = async (habitId: string) => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    await prisma.habit.delete({
      where: {
        id: habitId,
      },
    });

    revalidatePath('/tracker');
    revalidatePath('/dashboard');

    return Promise.resolve({ message: 'Successfully deleted habit!' });
  } catch (err) {
    return Promise.reject({ message: 'Unable to delete habit!' });
  }
};
