import { GoTrash } from "react-icons/go";
import { PiFolderStar } from "react-icons/pi";
import { IoCloudDownloadOutline } from "react-icons/io5";

const ContextMenu = ({ x, y, file, onClose }) => {
  return (
    <div
      style={{ top: y, left: x }}
      onMouseDown={(e) => e.stopPropagation()}   // 🔥 IMPORTANT
      className="context-menu absolute z-50 w-44 bg-white rounded-lg shadow-lg border py-2 text-sm"
    >
      <button
        onClick={() => {
        //   console.log("Star:", file);
          onClose();
        }}
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100"
      >
        <PiFolderStar size={16} />
        Star
      </button>

      <button
        onClick={() => {
        //   console.log("Download:", file);
          onClose();
        }}
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100"
      >
        <IoCloudDownloadOutline size={16} />
        Download
      </button>

      <button
        onClick={() => {
        //   console.log("Trash:", file);
          onClose();
        }}
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100"
      >
        <GoTrash size={16} />
        Move to Trash
      </button>
    </div>
  );
};

export default ContextMenu;
