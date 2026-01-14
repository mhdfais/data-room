import { SiIcloud } from "react-icons/si";

const StorageCard = () => {
  return (
    <div className="">
    <div className=" bg-gray-100 rounded-sm px-1.5 mr-6 py-1.5 flex gap-2 items-center">
      <div className="">
        <SiIcloud size={25} />
      </div>
      <div>
        <span className="text-sm font-medium">Storage</span>
        <div className="h-[0.2rem] bg-gray-300 rounded-full">
          <div className="h-full bg-black w-[40%]" />
        </div>
        <p className="text-[0.6rem] text-gray-500">25 GB OF 50 GB Used</p>
      </div>
    </div>
    </div>
  );
};

export default StorageCard;
