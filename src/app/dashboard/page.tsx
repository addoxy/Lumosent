import DashboardCard from '@/components/DashboardCard';
import Navbar from '@/components/Navbar';

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

const page = () => {
  return (
    <>
      <Navbar title="Dashboard" />
      <div className="grid grid-cols-4 gap-x-6">
        {mockupCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>
    </>
  );
};

export default page;
