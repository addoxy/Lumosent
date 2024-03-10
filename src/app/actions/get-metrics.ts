'use server';

import { prisma } from '@/lib/prisma';
import { ServerResponse, getUser } from '@/utils/server';
import { formatDayStats, getDaysCount, getLongestStreak } from '@/utils/utils';
import { sub } from 'date-fns';

export const getTotalLogs = async () => {
  const user = await getUser();

  if (!user) {
    return null;
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
    ServerResponse('Server error', 500);
    return null;
  }
};

export const getPerfectDays = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  try {
    const distinctDates = await prisma.habitEntry.groupBy({
      by: ['completedAt'],
      where: { habit: { userId: user.id } },
      _count: { completedAt: true },
      having: {
        completedAt: {
          _count: {
            gte: await prisma.habit.count({ where: { userId: user.id } }),
          },
        },
      },
    });

    const completedDaysCount = getDaysCount(distinctDates);
    return completedDaysCount;
  } catch (err) {
    ServerResponse('Server error', 500);
    return null;
  }
};

export const getUserLongestStreak = async () => {
  const user = await getUser();

  if (!user) {
    return null;
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
    ServerResponse('Server error', 500);
    return null;
  }
};

export const getFavoriteHabit = async () => {
  const user = await getUser();

  if (!user) {
    return null;
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
    ServerResponse('Server error', 500);
    return null;
  }
};

export const getGraphStats = async (daysBack = 7) => {
  const user = await getUser();

  if (!user) {
    return null;
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
    ServerResponse('Server error', 500);
    return null;
  }
};
