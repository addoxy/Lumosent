'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const renameHabit = async (habitId: string, newName: string) => {
  const user = await getUser();

  if (!user) {
    return { error: 'Something went wrong!' };
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
  } catch (err) {
    ServerResponse('Server error', 500);
    return { error: 'Something went wrong!' };
  }

  revalidatePath('/tracker');
  revalidatePath('/dashboard');

  return { success: 'Successfully renamed habit!' };
};
