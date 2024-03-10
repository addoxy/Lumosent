import {
  getPerfectDays,
  getFavoriteHabit,
  getTotalLogs,
  getUserLongestStreak,
} from '../actions/get-metrics';
import DashboardCard from './components/DashboardCard';
import Graph from './components/Graph';
import GraphMenu from './components/GraphMenu';
import Navbar from '@/components/Navbar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';

const mockupChartData = [
  {
    date: 'Jan',
    'Habits Done': 20,
  },
  {
    date: 'Feb',
    'Habits Done': 33,
  },
  {
    date: 'Mar',
    'Habits Done': 24,
  },
  {
    date: 'Apr',
    'Habits Done': 55,
  },
  {
    date: 'May',
    'Habits Done': 87,
  },
  {
    date: 'Jun',
    'Habits Done': 43,
  },
  {
    date: 'Jul',
    'Habits Done': 12,
  },
  {
    date: 'Aug',
    'Habits Done': 90,
  },
  {
    date: 'Sep',
    'Habits Done': 100,
  },
  {
    date: 'Oct',
    'Habits Done': 80,
  },
  {
    date: 'Nov',
    'Habits Done': 100,
  },
  {
    date: 'Dec',
    'Habits Done': 100,
  },
];

const page = async () => {
  const totalLogs = await getTotalLogs();
  const perfectDays = await getPerfectDays();
  const longestStreak = await getUserLongestStreak();
  const favoriteHabit = await getFavoriteHabit();

  return (
    <div className="flex flex-col gap-y-6">
      <Navbar title="Dashboard" />
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          data={(totalLogs && totalLogs.toString()) || '0'}
          footer="All time"
          icon="check"
          title="Total habits logged"
        />
        <DashboardCard
          data={(perfectDays && perfectDays.toString()) || '0'}
          footer="All time"
          icon="fire"
          title="Perfect Days"
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
          <div className="flex justify-between">
            <CardTitle className="text-xl">Overview</CardTitle>
            <GraphMenu />
          </div>
        </CardHeader>
        <CardContent>
          <Graph chartData={mockupChartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
