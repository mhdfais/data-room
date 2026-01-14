import { useNavigate, useLocation } from "react-router-dom";
import { FaStar, FaTrash } from "react-icons/fa";

const FloatingActions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const baseBtn =
    "p-2 rounded-lg cursor-pointer transition flex items-center justify-center";
  const activeBtn = "bg-slate-900 text-white";
  const inactiveBtn = "bg-gray-100 hover:bg-gray-200 text-gray-700";

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl flex items-center gap-2 px-3 py-2 z-40">
      {/* New Folder */}
      <div
  onClick={() => navigate("/add-folder")}
  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm cursor-pointer transition
    ${
      isActive("/add-folder")
        ? "bg-slate-900 text-white"
        : "bg-gray-100 text-black hover:bg-gray-200"
    }
  `}
>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_90_1464)">
<path d="M22.5 6.75V5.4375C22.5 5.18886 22.4012 4.9504 22.2254 4.77459C22.0496 4.59877 21.8111 4.5 21.5625 4.5H9.18749C9.06382 4.50203 8.941 4.47916 8.82634 4.43277C8.71168 4.38637 8.60752 4.31739 8.52006 4.22993C8.4326 4.14247 8.36362 4.03831 8.31722 3.92365C8.27083 3.80899 8.24796 3.68617 8.24999 3.5625V2.4375C8.24999 2.18886 8.15122 1.9504 7.9754 1.77459C7.79959 1.59877 7.56113 1.5 7.31249 1.5H0.967492C0.710765 1.50676 0.466624 1.61265 0.286255 1.79547C0.105885 1.97828 0.0032951 2.22383 -7.75943e-06 2.48062V21.2906C-0.00627639 21.4441 0.0179239 21.5973 0.0711949 21.7413C0.124466 21.8853 0.205752 22.0174 0.310356 22.1299C0.414961 22.2423 0.540811 22.3329 0.680635 22.3964C0.82046 22.46 0.971487 22.4952 1.12499 22.5H22.5" fill="#231F20"/>
<path d="M1.125 22.5001C1.27509 22.5091 1.42539 22.4862 1.56597 22.4329C1.70655 22.3795 1.83421 22.297 1.94053 22.1907C2.04685 22.0843 2.12941 21.9567 2.18276 21.8161C2.2361 21.6755 2.25902 21.5252 2.25 21.3751L2.32313 9.57575V7.87512C2.32652 7.75167 2.35427 7.6301 2.40479 7.5174C2.4553 7.40471 2.52759 7.3031 2.61749 7.21842C2.7074 7.13375 2.81314 7.06767 2.92866 7.02399C3.04418 6.9803 3.16719 6.95987 3.29062 6.96387H23.0325C23.1559 6.95987 23.2789 6.9803 23.3945 7.02399C23.51 7.06767 23.6157 7.13375 23.7056 7.21842C23.7955 7.3031 23.8678 7.40471 23.9183 7.5174C23.9689 7.6301 23.9966 7.75167 24 7.87512V21.3751C23.9803 21.667 23.8554 21.9418 23.6485 22.1487C23.4417 22.3555 23.1669 22.4804 22.875 22.5001H1.125Z" fill="#112635"/>
</g>
<defs>
<clipPath id="clip0_90_1464">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

        New Folder
      </div>

      {/* Starred */}
      <button
        onClick={() => navigate("/starred")}
        className={`${baseBtn} ${
          isActive("/starred") ? activeBtn : inactiveBtn
        }`}
      >
        <FaStar size={18} />
      </button>

      {/* Trash */}
      <button
        onClick={() => navigate("/trash")}
        className={`${baseBtn} ${isActive("/trash") ? activeBtn : inactiveBtn}`}
      >
        <FaTrash size={17} />
      </button>
    </div>
  );
};

export default FloatingActions;
