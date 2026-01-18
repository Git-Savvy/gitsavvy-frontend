import logo from "../../assets/lightLogo.svg";
import { ChevronDown, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
export default function Navbar() {
  const { user } = useContext(UserContext); //just access without modifying anything
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b-2  border-gray-200 bg-white h-[4rem] ">
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
          <Briefcase />
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

          <ChevronDown className="text-sm text-gray-500 hover:text-texthover" />
        </div>
      </div>
    </nav>
  );
}
