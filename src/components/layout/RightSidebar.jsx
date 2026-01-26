import ProgressCard from "../common/discover/ProgressCard";
import Badge from "../common/discover/Badge";
import Cup from "../../assets/cupIcon.png";
import ContributionCard from "../common/discover/ContributionCard";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
export default function RightSidebar() {
  const { user } = useContext(UserContext);
  return (
    <aside className=" hidden md:flex">
      <div className=" max-w-[15rem] md:max-w-[20rem] space-y-6">
        {/* Progress */}
        <div className=" p-5 bg-white mt-5">
          <div className="flex gap-2">
            <img src={Cup} className="w-5 h-5 mt-1"></img>
            <h3 className="font-semibold mb-3"> Your Progress</h3>
          </div>
          <ProgressCard img={Cup} />
        </div>

        {/* Badges */}
        <div className="p-5 bg-white">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold mb-5  ">Recent Badges</h3>
            <span className="bg-background w-6 h-6 border-2 border-gray-400 rounded-[40%]  mb-5 flex justify-center items-center">
              <p className="text-text-dark ">{user.badges.length}</p>
            </span>
          </div>

          {user.badges.map((badge, index) => (
            <Badge
              key={badge.id}
              title={badge.name}
              level={badge.level}
              img={badge.icon}
              num={index}
            />
          ))}

          {/* Contribution card*/}
          <ContributionCard />
        </div>
      </div>
    </aside>
  );
}
