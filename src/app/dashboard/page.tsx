import {
  getFavoriteHabit,
  getGraphStats,
  getTodaysHabitCount,
  getTotalLogs,
  getUserLongestStreak,
} from '../actions/get-metrics';
import DashboardCard from './components/DashboardCard';
import Graph from './components/Graph';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';

const page = async () => {
  const totalLogs = await getTotalLogs();
  const todaysHabitCount = await getTodaysHabitCount();
  const longestStreak = await getUserLongestStreak();
  const favoriteHabit = await getFavoriteHabit();
  const graphStats = await getGraphStats();
  console.log(favoriteHabit);

  if (
    totalLogs === null ||
    todaysHabitCount === null ||
    longestStreak === null
  ) {
    return (
      <p className="mx-auto mt-40 text-lg text-zinc-300">
        &#x1F641; Something went wrong! Please try again later!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-y-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          data={totalLogs.toString()}
          footer="All time"
          icon="check"
          title="Total habits logged"
        />
        <DashboardCard
          data={todaysHabitCount.toString()}
          footer="Today"
          icon="fire"
          title="Habits logged today"
        />
        <DashboardCard
          data={longestStreak.toString()}
          footer="All time"
          icon="gold"
          title="Longest Streak"
        />
        <DashboardCard
          data={favoriteHabit?.label || 'N/A'}
          footer="All time"
          icon="heart"
          title="Your favorite habit"
        />
      </div>
      <Card className="border-zinc-800 p-4 sm:px-10 sm:py-8">
        <CardHeader className="mb-11 justify-between">
          <CardTitle className="text-xl">Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Graph chartData={graphStats || []} />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
