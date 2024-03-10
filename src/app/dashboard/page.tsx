import {
  getFavoriteHabit,
  getGraphStats,
  getTotalLogs,
  getUserLongestStreak,
  getTodaysHabitCount,
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

  return (
    <div className="flex flex-col gap-y-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          data={(totalLogs && totalLogs.toString()) || '0'}
          footer="All time"
          icon="check"
          title="Total habits logged"
        />
        <DashboardCard
          data={(todaysHabitCount && todaysHabitCount.toString()) || '0'}
          footer="Today"
          icon="fire"
          title="Habits logged today"
        />
        <DashboardCard
          data={(longestStreak && longestStreak.toString()) || '0'}
          footer="All time"
          icon="gold"
          title="Longest Streak"
        />
        <DashboardCard
          data={(favoriteHabit && favoriteHabit.label) || 'N/A'}
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
          {graphStats && <Graph chartData={graphStats} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
