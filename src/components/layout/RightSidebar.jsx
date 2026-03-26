import ProgressCard from "../common/discover/ProgressCard";
import Badge from "../common/discover/Badge";
import Cup from "../../assets/cupIcon.png";
import ContributionCard from "../common/discover/ContributionCard";
import { useUserContext } from "../../hooks/useUserContext";
export default function RightSidebar() {
  const { user } = useUserContext();
  return (
    <aside className=" hidden md:flex">
      <div className=" max-w-[15rem] md:max-w-[20rem] space-y-6">
        {/* Progress */}
        <div className=" p-5 bg-white mt-5">
          <div className="flex gap-2">
            <img src={Cup} className="w-5 h-5 mt-1"></img>
            <h3 className="font-semibold mb-3 text-base md:text-xl">
              {" "}
              Your Progress
            </h3>
          </div>
          <ProgressCard img={Cup} />
        </div>

        {/* Badges */}
        <div className="p-5 bg-white">
          <div className="flex justify-between items-center md:text-xl">
            <h3 className="font-semibold mb-5  ">Recent Badges</h3>
            <span className="bg-background w-6 h-6 border-2 border-gray-400 rounded-[40%]  mb-5 flex justify-center items-center">
              <p className="text-text-dark ">{user.badges?.length||0}</p>
            </span>
          </div>

          {user?.badges && user.badges.length > 0 ? (
            user.badges.map((badge, index) => (
              <Badge
                key={badge.id || index} // Fallback to index if id is missing
                title={badge.name}
                level={badge.level}
                img={badge.icon}
                num={index}
              />
            ))
          ) : (
            <p className="text-Gray400 font-bold">No badges yet</p>
          )}

          {/* Contribution card*/}
          <ContributionCard />
        </div>
      </div>
    </aside>
  );
}
