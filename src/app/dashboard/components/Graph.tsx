'use client';

import { formatData } from '@/utils/utils';
import { AreaChart, CustomTooltipProps } from '@tremor/react';

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
      className="h-80 w-full fill-tremor-brand-subtle text-tremor-content-subtle"
      data={chartData}
      index="date"
      categories={['Habits Done']}
      valueFormatter={formatData}
      yAxisWidth={60}
      showGridLines={false}
      curveType="monotone"
      customTooltip={CustomTooltip}
    />
  );
};

const CustomTooltip = (customProps: CustomTooltipProps) => {
  const { payload, active } = customProps;
  if (!active || !payload) return null;

  return (
    <div className="tremor rounded-tremor-default border border-tremor-border bg-tremor-brand-emphasis shadow-tremor-dropdown">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-col gap-y-1 px-3 py-2">
          <p className="text-zinc-200">{category.dataKey}</p>
          <p className="font-medium text-zinc-400">
            {formatData(category.value as number)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Graph;
