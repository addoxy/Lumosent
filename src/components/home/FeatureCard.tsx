import { cn } from '@/utils/utils';

interface FeatureCardProps {
  FeatureIcon: React.ReactNode;
  title: string;
  content: string;
}

const FeatureCard = (props: FeatureCardProps) => {
  const { FeatureIcon, title, content } = props;
  return (
    <div className="transition-all duration-200 hover:scale-105">
      <div className="card group relative flex w-full flex-col rounded-lg border border-zinc-800 bg-zinc-900 p-10">
        <div className="rotate-card -inset-0.5 -z-10 rounded-lg group-hover:absolute" />
        <div className="relative mb-6 flex w-fit items-center justify-center rounded-lg bg-zinc-700/50 p-3">
          {FeatureIcon}
        </div>
        <h3 className="relative mb-4 text-xl text-zinc-200">{title}</h3>
        <p className="relative text-base text-zinc-400">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
