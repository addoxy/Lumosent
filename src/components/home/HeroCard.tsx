type HeroCardProps = {
  title: string;
  data: string | number;
  footer: string;
};

const HeroCard = (props: HeroCardProps) => {
  const { data, footer, title } = props;

  return (
    <div className="rounded-xl bg-zinc-800 px-4 py-3">
      <div className="flex flex-col">
        <h3 className="text-sm text-zinc-300">{title}</h3>
        <span className="text-base text-zinc-100">{data}</span>
        <span className="text-xs text-zinc-500">{footer}</span>
      </div>
    </div>
  );
};

export default HeroCard;
