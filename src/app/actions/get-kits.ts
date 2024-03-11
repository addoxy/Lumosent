'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';

export const getKits = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  try {
    const kits = await prisma.starterKit.findMany();
    return kits;
  } catch (err) {
    return Promise.reject({ message: 'Unable to fetch starter kits!' });
  }
};
