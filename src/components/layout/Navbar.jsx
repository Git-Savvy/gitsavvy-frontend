import logo from "../../assets/lightLogo.svg";
import { ChevronDown, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext, useRef, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import ProfileDropdownMenu from "../common/profilePageComponents/ProfileDropdownMenu";
export default function Navbar() {
  const { user } = useContext(UserContext); //just access without modifying anything
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      /**dropdownRef.current && ...
       This ensures the dropdown exists in the DOM before we try to call .contains().
       If we didn’t check, and the element is not yet rendered (or removed), this would throw an error: */

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  console.log("isOpen:", isOpen);
  return (
    <nav className="flex items-center justify-between gap-2 px-6 py-4 border-b-2  border-gray-200 bg-white h-[4rem] lg:shadow-sm">
      {/* Left */}
      <NavLink to="/home">
        <img src={logo} className="w-[15rem]" />
      </NavLink>

      {/* Right */}
      <div className="flex items-center gap-4">
        <NavLink
          to="/home/myWork"
          className={({ isActive }) =>
            `p-2 rounded-md border border-gray-700  ${isActive ? "bg-primary text-white " : "text-primary hover:bg-hoverl hover:text-primary"}`
          }
        >
          <Briefcase className="w-4 h-4 md:w-6 md:h-6" />
        </NavLink>
        {/*profile photo and name */}
        <div className="flex items-center gap-2">
          <NavLink to="/home/profile">
            {({ isActive }) => (
              <div className="flex items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center hover:bg-texthover ${isActive ? "bg-texthover" : ""}`}
                >
                  <img
                    src={user.avatar}
                    className="w-8 h-8 rounded-full"
                    alt="avatar"
                  />
                </div>

                <span
                  className={`text-sm transition ${isActive ? "text-texthover" : "text-gray-500 hover:text-texthover"}`}
                >
                  {user.username}
                </span>
              </div>
            )}
          </NavLink>

          <div ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <ChevronDown className="text-sm text-gray-500 hover:text-texthover" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mr-5 mt-2 z-50">
                <ProfileDropdownMenu
                  name={user.firstName}
                  handle={user.username}
                  level={user.level}
                  points={user.points}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
