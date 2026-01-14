import { GoTrash } from "react-icons/go";
import { MdRestore } from "react-icons/md";

const TrashContextMenu = ({ x, y, file, onClose }) => {
  return (
    <div
      style={{ top: y, left: x }}
      onMouseDown={(e) => e.stopPropagation()}
      className="context-menu absolute z-50 w-44 bg-white rounded-lg shadow-lg border py-2 text-sm"
    >
      <button
        onClick={() => {
          console.log("Restore:", file);
          onClose();
        }}
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100"
      >
        <MdRestore size={18} />
        Restore
      </button>

      <button
        onClick={() => {
          console.log("Delete:", file);
          onClose();
        }}
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50"
      >
        <GoTrash size={16} />
        Delete
      </button>
    </div>
  );
};

export default TrashContextMenu;