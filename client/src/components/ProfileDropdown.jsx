import { FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  return (
    <div className="absolute right-0 top-14 w-64 bg-[#F2F4F5] rounded-sm p-3 shadow-xl  z-50">
      {/* User Info */}
      <div className="flex items-center gap-3 pb-2">
        <img
          src={`https://ui-avatars.com/api/?name=${user?.username || 'User'}&background=E5E7EB&color=374151`}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="overflow-hidden">
          <p className="text-sm font-medium truncate">{user?.username || 'User'}</p>
          <p className="text-xs text-gray-500 truncate" title={user?.email}>{user?.email || 'email@example.com'}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 border-t border-gray-300 cursor-pointer">
          <FaQuestionCircle className="text-black" />
          Help & Support
        </button>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 text-black border-t border-gray-300 cursor-pointer"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-2 text-[11px] text-gray-400 py-2 border-t border-gray-300">
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <p>|</p>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default ProfileDropdown;