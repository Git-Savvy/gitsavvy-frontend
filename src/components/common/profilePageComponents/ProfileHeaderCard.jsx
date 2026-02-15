import { Trophy, Star, Github, Check } from "lucide-react";

export default function ProfileHeaderCard({
  avatar,
  name,
  handle,
  level,
  points,
  githubUser,
}) {
  return (
    <div className="bg-white border border-Gray200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-textdark font-semibold mb-6 text-lg">Account Information</h2>
      <div className="flex items-center gap-5 mb-8">
        <img
          src={avatar}
          className="w-20 h-20 rounded-full border-2 border-primary  shadow-[0_0_20px_#B88EF4] 
            hover:shadow-[0_0_30px_#B88EF4] "
          alt="Avatar"
        />
        <div>
          <h3 className="text-xl font-bold text-textdark">{name}</h3>
          <p className="text-Gray600 mb-2">@{handle}</p>
          <div className="flex flex-col md:flex-row gap-2">
            <span className="bg-Cyan400 text-NavText1 text-sm font-bold px-2 py-1 rounded flex items-center gap-1">
              <Trophy className="w-4 h-4" /> Level {level}
            </span>
            <span className="border border-Gray200 text-Gray600 text-sm font-bold px-2 py-1 rounded flex items-center gap-1">
              <Star className="w-4 h-4" /> {points} points
            </span>
          </div>
        </div>
      </div>
      <div className="bg-Cyan50 border border-Teal400 rounded-xl p-4 flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-Teal400" />
          <div>
            <p className="text-base font-semibold text-textdark">
              GitHub Connected
            </p>
            <p className="text-sm text-Gray600">
              Authenticated as @{githubUser}
            </p>
          </div>
        </div>
        <span className="bg-Teal400/20 text-Teal400 text-[10px] border border-Teal400 font-bold px-2 py-1 rounded-md flex items-center gap-1 w-fit mt-5 md:mt-0">
          <Check className="w-3 h-3 text-Teal400" /> CONNECTED
        </span>
      </div>
    </div>
  );
}
