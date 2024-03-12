import { getKits } from '../actions/get-kits';
import Kit from './components/Kit';

const page = async () => {
  const kits = await getKits();

  return (
    <div className="mx-auto grid w-[640px] grid-cols-1 gap-6">
      {kits?.map((kit) => <Kit key={kit.id} {...kit} />)}
    </div>
  );
};

export default page;
