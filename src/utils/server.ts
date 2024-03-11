import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const user = session.user;
  const prismaUser = await prisma.user.findUnique({
    where: {
      email: user?.email as string,
    },
  });

  if (!prismaUser) {
    return null;
  }

  return prismaUser;
};
