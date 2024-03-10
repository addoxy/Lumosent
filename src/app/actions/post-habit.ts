'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const postHabit = async (label: string) => {
  const user = await getUser();

  if (!user) {
    return null;
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
  }

  revalidatePath('/tracker');
};
