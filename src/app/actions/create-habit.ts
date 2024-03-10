'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const createHabit = async (label: string) => {
  const user = await getUser();

  if (!user) {
    return { error: 'Something went wrong!' };
  }

  try {
    await prisma.habit.create({
      data: {
        label: label,
        userId: user.id,
      },
    });
  } catch (err) {
    ServerResponse('Server error', 500);
    return { error: 'Something went wrong!' };
  }

  revalidatePath('/tracker');
  return { success: 'Successfully created habit!' };
};
