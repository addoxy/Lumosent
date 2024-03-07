import Dropdown from './Dropdown';

const Navbar = ({ title }: { title: string }) => {
  return (
    <div className="mb-14 flex w-full items-center justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Dropdown />
    </div>
  );
};

export default Navbar;
