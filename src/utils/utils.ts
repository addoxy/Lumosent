import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import {
  subDays,
  eachDayOfInterval,
  format,
  getDay,
  parseISO,
  sub,
  differenceInDays,
} from 'date-fns';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const formatName = (name: string) => {
  const parts = name.split(' ');
  let result = '';

  for (let i = 0; i < parts.length; i++) {
    result += parts[i][0];
  }

  return result;
};

export const formatData = (number: number) => `${number}%`;

export const dateToString = (date: Date) => {
  return format(date, 'yyyy-MM-dd');
};

export const formatDate = (dateString: string, dayOnly?: boolean) => {
  const date = parseISO(dateString);
  if (dayOnly) {
    return format(date, 'dd');
  }
  return format(date, 'yyyy-MM-dd');
};

export const getDayFromDate = (dateString: string) => {
  const date = parseISO(dateString);
  const dayOfWeekIndex = getDay(date);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return daysOfWeek[dayOfWeekIndex];
};

export const getDatesFromPastWeek = () => {
  const today = new Date();
  const sevenDaysAgo = subDays(today, 6);

  const dates = eachDayOfInterval({
    start: sevenDaysAgo,
    end: today,
  }).map((date) => format(date, 'yyyy-MM-dd'));

  return dates;
};

export const getDaysCount = (
  distinctDates: (Prisma.PickEnumerable<
    Prisma.HabitEntryGroupByOutputType,
    'completedAt'[]
  > & {
    _count: {
      completedAt: number;
    };
  })[]
) => {
  const completedDaysCount = distinctDates.map((dateResult) =>
    format(dateResult.completedAt, 'yyyy-MM-dd')
  ).length;

  return completedDaysCount;
};

export const getLongestStreak = async (
  entriesByHabit: (Prisma.PickEnumerable<
    Prisma.HabitEntryGroupByOutputType,
    ('completedAt' | 'habitId')[]
  > & {
    _max: {
      completedAt: Date | null;
    };
  })[]
) => {
  let longestStreak = 0;

  for (const {
    habitId,
    _max: { completedAt: lastDate },
  } of entriesByHabit) {
    const habitEntries = await prisma.habitEntry.findMany({
      where: { habitId },
      orderBy: { completedAt: 'desc' },
      select: { completedAt: true },
    });

    let currentStreak = 0;
    let prevDate = sub(new Date(), { days: 1 });

    for (const entry of habitEntries) {
      if (differenceInDays(prevDate, entry.completedAt) === 1) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
      prevDate = entry.completedAt;
    }
  }

  return longestStreak;
};

export const formatDayStats = (
  dailyCounts: (Prisma.PickEnumerable<
    Prisma.HabitEntryGroupByOutputType,
    'completedAt'[]
  > & {
    _count: {
      habitId: number;
    };
  })[],
  totalHabitCount: number
) => {
  const results = dailyCounts.map((day) => {
    const completionPercentage = (day._count.habitId / totalHabitCount) * 100;
    return {
      date: format(day.completedAt, 'dd'),
      'Habits Done': completionPercentage, // Round if needed
    };
  });

  return results;
};
