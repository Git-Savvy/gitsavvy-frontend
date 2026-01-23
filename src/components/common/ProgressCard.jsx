import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
export default function ProgressCard({ img }) {
  const { user } = useContext(UserContext);
  return (
    <div className="border-2 border-teal-400 bg-gradient-to-br from-[#EDFBFA] to-[#E5FFFD] rounded-xl p-5">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div>
          <p className="text-sm text-gray-600">Level {user.level}</p>
          <span className="pt-5 md:pt-0 flex gap-2 ">
            <FontAwesomeIcon icon={faStar} className="text-teal-300 pt-2 md:pt-3 " />{" "}
            <p className="text-sm md:text-lg font-semibold mt-1"> {user.points} pts</p>
          </span>
        </div>
        <div className="hidden md:flex w-16 h-16 items-center justify-center bg-white border-2 border-gray-300 rounded-full">
          <img src={img} alt="cup icon" className="w-8 h-8 " />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xs text-gray-500 mt-1 mb-2">Next level:</p>
          <p className="text-xs text-gray-500 mt-1 mb-2"> 4000 pts</p>
          {/*need to implement some logic here */}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 w-[60%] bg-gradient-to-br from-[#1DDDD0] to-[#00C0E8] rounded-full" />
        </div>
      </div>
    </div>
  );
}
