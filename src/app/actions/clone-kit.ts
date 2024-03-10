'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';
import { revalidatePath } from 'next/cache';

export const cloneKit = async (habits: string[]) => {
  const user = await getUser();

  if (!user) {
    return { error: 'Something went wrong!' };
  }

  try {
    await prisma.habit.createMany({
      data: habits.map((habit) => ({
        label: habit,
        userId: user.id,
      })),
      skipDuplicates: true,
    });
  } catch (err) {
    ServerResponse('Server error', 500);
    return { error: 'Something went wrong!' };
  }

  revalidatePath('/tracker');
  return { success: 'Successfully created habit!' };
};
