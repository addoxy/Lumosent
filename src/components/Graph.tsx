import { Button } from './vendor/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/vendor/card';
import { AreaChart } from '@tremor/react';

const chartdata = [
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

const dataFormatter = (number: number) => `${number}%`;

export function LineChartHero() {
  return (
    <Card className="border-zinc-800 px-10 py-8">
      <CardHeader className="mb-11 justify-between">
        <div className="flex justify-between">
          <CardTitle className="text-xl">Overview</CardTitle>
          <Button
            variant="outline"
            className="border-zinc-800 hover:bg-zinc-900"
          >
            Monthly
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AreaChart
          className="h-80 fill-tremor-brand-subtle text-tremor-content-subtle"
          data={chartdata}
          index="date"
          categories={['Habits Done']}
          colors={['indigo', 'rose']}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
          showGridLines={false}
          curveType="natural"
        />
      </CardContent>
    </Card>
  );
}
