import { dataFormatter } from '@/utils/utils';
import { AreaChart } from '@tremor/react';

type ChartProps = {
  chartData: {
    date: string;
    'Habits Done': number;
  }[];
};

const Graph = (props: ChartProps) => {
  const { chartData } = props;

  return (
    <AreaChart
      className="h-80 fill-tremor-brand-subtle text-tremor-content-subtle"
      data={chartData}
      index="date"
      categories={['Habits Done']}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
      showGridLines={false}
      curveType="natural"
    />
  );
};

export default Graph;
