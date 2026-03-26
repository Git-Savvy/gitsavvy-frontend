import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../../hooks/useUserContext";

export default function ProgressCard({ img }) {
  const { user } = useUserContext();

  // 1. Calculate points within the current 200-point bracket
  const currentLevelPoints = user.points % 200;
  
  // 2. Calculate percentage (clamped between 0-100 just in case)
  const progressPercentage = Math.min((currentLevelPoints / 200) * 100, 100);

  // 3. Calculate the total points needed for the next level
  const nextLevelThreshold = (Math.floor(user.points / 200) + 1) * 200;

  return (
    <div className="border-2 border-teal-400 bg-Cyan50 rounded-xl p-5 ">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div>
          <p className="text-sm md:text-base text-text-secondry">Level {user.level}</p>
          <span className="pt-5 md:pt-0 flex gap-2 ">
            <FontAwesomeIcon icon={faStar} className="text-teal-400 pt-2 md:pt-3 " />
            <p className="text-sm md:text-lg font-semibold mt-1"> {user.points} pts</p>
          </span>
        </div>
        <div className="hidden md:flex w-16 h-16 items-center justify-center bg-background border-2 border-teal-400 rounded-full">
          <img src={img} alt="cup icon" className="w-8 h-8 " />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xs md:text-base text-text-secondry mt-1 mb-2">Next level:</p>
          <p className="text-xs md:text-base text-text-secondry mt-1 mb-2">{nextLevelThreshold} pts</p>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-2 bg-background rounded-full overflow-hidden">
          {/* Dynamic Progress Bar */}
          <div 
            className="h-2 bg-gradient-to-br from-SBar to-EBar transition-all duration-500" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-[10px] text-right mt-1 text-text-secondry">
          {currentLevelPoints} / 200 XP
        </p>
      </div>
    </div>
  );
}