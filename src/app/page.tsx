import DashboardCard from '@/components/DashboardCard';

export default function Home() {
  return (
    <div>
      <DashboardCard
        title="Total habits logged"
        data="124"
        footer="All time"
        icon="check"
      />
    </div>
  );
}
