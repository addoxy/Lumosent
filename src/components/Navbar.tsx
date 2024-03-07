import Dropdown from './DropdownMenu';

const Navbar = ({ title }: { title: string }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Dropdown />
    </div>
  );
};

export default Navbar;
