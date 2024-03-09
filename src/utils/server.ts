import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export const ServerResponse = (message: String, status: number) => {
  return new Response(JSON.stringify(message), { status: status });
};

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    ServerResponse('Unauthorized', 401);
    return null;
  }

  const user = session.user;
  const prismaUser = await prisma.user.findUnique({
    where: {
      email: user?.email as string,
    },
  });

  if (!prismaUser) {
    ServerResponse('Invalid account', 403);
    return null;
  }

  return prismaUser;
};
