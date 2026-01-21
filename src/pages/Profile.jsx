import ProfileHeaderCard from "../components/common/profilePageComponents/ProfileHeaderCard";
import RecommendationInfoCard from "../components/common/profilePageComponents/RecommendationInfoCard";
import SelectionCards from "../components/common/profilePageComponents/SelectionCards";
import BackButton from "../components/common/BackButton";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const Navigate = useNavigate();
  // State for Language Tags
  const [languages, setLanguages] = useState([
    { id: 1, name: "TypeScript" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "Python" },
    { id: 4, name: "Rust" },
    { id: 5, name: "Go" },
    { id: 6, name: "Java" },
    { id: 7, name: "C++" },
    { id: 8, name: "Ruby" },
    { id: 9, name: "PHP" },
    { id: 10, name: "Swift" },
    { id: 11, name: "Kotlin" },
  ]);

  // State for Interest Tags
  const [interests, setInterests] = useState([
    { id: 1, name: "Web Development" },
    { id: 2, name: "Mobile Development" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "DevOps" },
    { id: 5, name: "Cloud Computing" },
    { id: 6, name: "Data Science" },
    { id: 7, name: "Blockchain" },
    { id: 8, name: "Game Development" },
    { id: 9, name: "Security" },
    { id: 10, name: "UI/UX" },
    { id: 11, name: "API Development" },
  ]);
  return (
    <div className="max-w-8xl px-45 space-y-8">
      <BackButton
        text="Back"
        onClick={() => {
          Navigate("/home");
        }}
      />
      <ProfileHeaderCard
        avatar={user.avatar}
        name={`${user.firstName} ${user.lastName}`}
        handle={user.username}
        level={user.level}
        points={user.points}
        githubUser={user.username}
      />

      <SelectionCards
        title="Preferred Programming Languages"
        description="Select languages you're comfortable working with. This helps us recommend relevant repositories."
        tags={languages} //this contain all list to show
        activeColor="blue"
        type="languages"
        setUser={setUser}
        user={user}
      />

      <SelectionCards
        title="Technical Interests"
        description="Choose topics you're interested in to refine repository recommendations."
        tags={interests}
        activeColor="purple"
        type="interests"
        setUser={setUser}
        user={user}
      />
      <RecommendationInfoCard />
    </div>
  );
}
