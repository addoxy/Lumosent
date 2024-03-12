import { getKits } from '../actions/get-kits';
import StarterKit from './components/StarterKit';

const page = async () => {
  const starterKits = await getKits();

  return (
    <div className="mx-auto grid w-[640px] grid-cols-1 gap-6">
      {starterKits?.map((kit) => <StarterKit key={kit.id} {...kit} />)}
    </div>
  );
};

export default page;
