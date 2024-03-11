'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const addLog = async (habitId: string, date: Date) => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    await prisma.habitEntry.create({
      data: {
        habitId: habitId,
        completedAt: date,
      },
    });

    revalidatePath('/tracker');
    revalidatePath('/dashboard');
    return Promise.resolve({ message: 'Successfully added log!' });
  } catch (err) {
    return Promise.reject({ message: 'Unable to add log!' });
  }
};

export const removeLog = async (habitId: string, date: Date) => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    // get the habit entry
    const habitEntry = await prisma.habitEntry.findFirst({
      where: {
        habitId: habitId,
        completedAt: date,
      },
    });

    // remove the habit entry
    await prisma.habitEntry.delete({
      where: {
        id: habitEntry?.id,
      },
    });

    revalidatePath('/tracker');
    revalidatePath('/dashboard');
    return Promise.resolve({ message: 'Successfully removed log!' });
  } catch (err) {
    return Promise.reject({ message: 'Unable to remove log!' });
  }
};
