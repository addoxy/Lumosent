'use server';

import { prisma } from '@/lib/prisma';
import { getUser } from '@/utils/server';
import { formatDayStats, getLongestStreak } from '@/utils/utils';
import { format, sub } from 'date-fns';

export const getTotalLogs = async () => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    const totalLogs = await prisma.habitEntry.count({
      where: {
        habit: {
          userId: user.id,
        },
      },
    });

    return totalLogs;
  } catch (err) {
    return Promise.reject({ message: 'Unable to fetch logs!' });
  }
};

export const getTodaysHabitCount = async () => {
  const today = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    const count = await prisma.habitEntry.count({
      where: {
        habit: { userId: user.id }, // Filter by the user
        completedAt: today,
      },
    });

    return count;
  } catch (err) {
    return Promise.reject({ message: "Unable to fetch today's habits count!" });
  }
};

export const getUserLongestStreak = async () => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    const entriesByHabit = await prisma.habitEntry.groupBy({
      by: ['habitId', 'completedAt'],
      where: { habit: { userId: user.id } },
      orderBy: { completedAt: 'desc' },
      _max: { completedAt: true },
    });

    // Get the most recent completion date per habit
    const longestStreak = await getLongestStreak(entriesByHabit);
    return longestStreak;
  } catch (err) {
    return Promise.reject({ message: 'Unable to fetch your longest streak!' });
  }
};

export const getFavoriteHabit = async () => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  try {
    const result = await prisma.habitEntry.groupBy({
      by: ['habitId'],
      where: {
        habit: { userId: user.id },
      },
      _count: {
        habitId: true,
      },
      orderBy: {
        _count: { habitId: 'desc' },
      },
      take: 1, // Fetch only the top result
    });

    // Get the habit based on the habitId
    const habitId = result[0].habitId;
    const habit = await prisma.habit.findUnique({
      where: { id: habitId },
    });

    return habit;
  } catch (err) {
    return null;
  }
};

export const getGraphStats = async (daysBack = 7) => {
  const user = await getUser();

  if (!user) {
    return Promise.reject({ message: 'Invalid account!' });
  }

  const startDate = sub(new Date(), { days: daysBack });

  try {
    const dailyCounts = await prisma.habitEntry.groupBy({
      by: ['completedAt'],
      where: {
        completedAt: { gte: startDate },
        habit: { userId: user.id },
      },
      _count: { habitId: true },
    });

    const totalHabitCount = await prisma.habit.count({
      where: { userId: user.id },
    });

    const results = formatDayStats(dailyCounts, totalHabitCount);
    return results;
  } catch (err) {
    return Promise.reject({ message: 'Unable to fetch visual stats!' });
  }
};
