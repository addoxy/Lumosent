import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { subDays, eachDayOfInterval, format, getDay, parseISO } from 'date-fns';
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
