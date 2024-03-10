'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';

export const getKits = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  try {
    const kits = await prisma.starterKit.findMany();

    ServerResponse('Successfully fetched starter kits', 200);
    return kits;
  } catch (err) {
    ServerResponse('Server error', 500);
    return null;
  }
};
