import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
export default function ProgressCard({ img }) {
  const { user } = useContext(UserContext);
  return (
    <div className="border-2 border-Teal400 bg-gradient-to-br from-SCyan to-ECyan rounded-xl p-5">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div>
          <p className="text-sm text-text-secondry">Level {user.level}</p>
          <span className="pt-5 md:pt-0 flex gap-2 ">
            <FontAwesomeIcon icon={faStar} className="text-teal-300 pt-2 md:pt-3 " />{" "}
            <p className="text-sm md:text-lg font-semibold mt-1"> {user.points} pts</p>
          </span>
        </div>
        <div className="hidden md:flex w-16 h-16 items-center justify-center bg-background border-2 border-gray-300 rounded-full">
          <img src={img} alt="cup icon" className="w-8 h-8 " />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xs text-text-secondry mt-1 mb-2">Next level:</p>
          <p className="text-xs text-text-secondry mt-1 mb-2"> 4000 pts</p>
          {/*need to implement some logic here */}
        </div>
        <div className="h-2 bg-background rounded-full">
          <div className="h-2 w-[60%] bg-gradient-to-br from-SBar to-EBar rounded-full" />
        </div>
      </div>
    </div>
  );
}
