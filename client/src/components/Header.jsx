import { useEffect, useRef, useState } from "react";
import logo from "../assets/dataroom-wattcharge-logo.png";
import ProfileDropdown from "./ProfileDropdown";
import { useAuth } from "../context/AuthContext";

const Header = ({ isLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useAuth();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEsc = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header className="h-[72px] pr-6 pl-2 flex items-center justify-between relative">
      {/* Logo */}
      <img className="h-auto w-40" src={logo} alt="wattcharge-logo" />

      {/* Right section */}
      {isLoggedIn && (
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          <input
            type="text"
            placeholder="Search"
            className="w-56 px-4 py-2 rounded-lg bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Avatar */}
          <img
            src={`https://ui-avatars.com/api/?name=${user?.username || 'User'}&background=E5E7EB&color=374151`}
            alt="User"
            onClick={() => setOpen((prev) => !prev)}
            className="w-9 h-9 rounded-md cursor-pointer"
          />

          {/* Dropdown */}
          {open && <ProfileDropdown />}
        </div>
      )}
    </header>
  );
};

export default Header;
