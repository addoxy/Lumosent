'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const addLog = async (habitId: string, date: Date) => {
  const user = await getUser();

  if (!user) {
    return { error: 'Something went wrong!' };
  }

  try {
    await prisma.habitEntry.create({
      data: {
        habitId: habitId,
        completedAt: date,
      },
    });
  } catch (err) {
    ServerResponse('Server error', 500);
    return { error: 'Something went wrong!' };
  }

  revalidatePath('/tracker');
  revalidatePath('/dashboard');

  return { success: 'Successfully logged habit!' };
};

export const removeLog = async (habitId: string, date: Date) => {
  const user = await getUser();

  if (!user) {
    return { error: 'Something went wrong!' };
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
  } catch (err) {
    ServerResponse('Server error', 500);
    return { error: 'Something went wrong!' };
  }

  revalidatePath('/tracker');
  revalidatePath('/dashboard');

  return { success: 'Successfully removed habit log!' };
};
