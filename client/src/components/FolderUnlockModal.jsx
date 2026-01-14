import React, { useEffect } from "react";
import { BiSolidLockAlt } from "react-icons/bi";

const FolderUnlockModal = ({ open, onClose, onSubmit }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
      />

      {/* Modal */}
      <div className="relative z-10 w-[420px] bg-white rounded-sm shadow-xl p-8">
        {/* Lock Icon */}
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <BiSolidLockAlt size={30} />
        </div>

        {/* Title */}
        {/* <h2 className="text-lg font-semibold mb-4">Password</h2> */}

        {/* Input */}
        <div>
          <label  className="text-sm font-medium block mb-2" htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter folder password"
            className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-slate-800"
          />
        </div>

        <p className="text-xs text-gray-400 mt-2 text-left">
          Min 6–8 characters recommended
        </p>

        {/* Action */}
        <button
          onClick={onSubmit}
          className="mt-6 w-full bg-slate-900 text-white py-2 rounded-sm hover:bg-slate-800 transition"
        >
          Open
        </button>
      </div>
    </div>
  );
};

export default FolderUnlockModal;
