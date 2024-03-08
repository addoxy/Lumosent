import type { ClassValue } from 'clsx';
import clsx from 'clsx';
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

export const dataFormatter = (number: number) => `${number}%`;
