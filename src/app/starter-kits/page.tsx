import { getKits } from '../actions/get-kits';
import Kit from './components/Kit';

const page = async () => {
  const kits = await getKits();

  return (
    <div className="grid grid-cols-3 gap-6">
      {kits?.map((kit) => <Kit key={kit.id} {...kit} />)}
    </div>
  );
};

export default page;
