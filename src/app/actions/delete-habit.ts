'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const deleteHabit = async (habitId: string) => {
  const user = await getUser();

  if (!user) {
    return { error: 'Something went wrong!' };
  }

  try {
    await prisma.habit.delete({
      where: {
        id: habitId,
      },
    });
  } catch (err) {
    ServerResponse('Server error', 500);
    return { error: 'Something went wrong!' };
  }

  revalidatePath('/tracker');
  revalidatePath('/dashboard');

  return { success: 'Successfully deleted habit!' };
};
