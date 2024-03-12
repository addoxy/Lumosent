export type Habit = {
  id: string;
  userId: string;
  label: string;
  entries: Entry[];
};

export type Entry = {
  id: string;
  completedAt: Date;
  habitId: string;
};
