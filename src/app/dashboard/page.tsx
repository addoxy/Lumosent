'use client';

import DashboardCard from '@/components/DashboardCard';
import Graph from '@/components/Graph';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/vendor/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/vendor/dropdown-menu';

const mockupCards = [
  {
    title: 'Total habits logged',
    data: '124',
    footer: 'All time',
    icon: 'check',
  },
  {
    title: 'Current best streak',
    data: '24',
    footer: 'Meditation',
    icon: 'fire',
  },
  {
    title: 'Longest streak',
    data: '86',
    footer: 'Reading',
    icon: 'gold',
  },
  {
    title: 'Your favorite habit',
    data: 'Reading',
    footer: 'All time',
    icon: 'heart',
  },
];

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

const page = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <Navbar title="Dashboard" />
      <div className="grid grid-cols-4 gap-x-6">
        {mockupCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>
      <Card className="border-zinc-800 px-10 py-8">
        <CardHeader className="mb-11 justify-between">
          <div className="flex justify-between">
            <CardTitle className="text-xl">Overview</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-zinc-800 hover:bg-zinc-900"
                >
                  Monthly
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="mt-1 w-20 border border-zinc-800 bg-zinc-900 font-medium"
              >
                <DropdownMenuItem className="h-9 cursor-pointer hover:bg-zinc-800">
                  Weekly
                </DropdownMenuItem>
                <DropdownMenuItem className="h-9 cursor-pointer hover:bg-zinc-800">
                  Yearly
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
