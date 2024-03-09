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

export type HabitProps = {
  habit: string;
  entries: Entry[];
};
