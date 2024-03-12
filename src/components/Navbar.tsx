import Dropdown from './Dropdown';

const Navbar = ({ title }: { title: string }) => {
  return (
    <div className="mb-6 flex w-full items-center justify-between sm:mb-10">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Dropdown />
    </div>
  );
};

export default Navbar;
