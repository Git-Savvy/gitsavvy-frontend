import ProfileHeaderCard from "../components/common/profilePageComponents/ProfileHeaderCard";
import ProfileDropdownMenue from "../components/common/profilePageComponents/ProfileDropdownMenu";
import RecommendationInfoCard from "../components/common/profilePageComponents/RecommendationInfoCard";
import SelectionCards from "../components/common/profilePageComponents/SelectionCards";
import BackButton from "../components/common/BackButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Profile() {
  const Navigate = useNavigate();
  // State for Language Tags
  const [languages, setLanguages] = useState([
    { name: "TypeScript", selected: true },
    { name: "JavaScript", selected: false },
    { name: "Python", selected: true },
    { name: "Rust", selected: true },
    { name: "Go", selected: false },
    { name: "Java", selected: false },
    { name: "C++", selected: false },
    { name: "Ruby", selected: false },
    { name: "PHP", selected: false },
    { name: "Swift", selected: false },
    { name: "Kotlin", selected: false },
  ]);

  // State for Interest Tags
  const [interests, setInterests] = useState([
    { name: "Web Development", selected: true },
    { name: "Mobile Development", selected: false },
    { name: "Machine Learning", selected: true },
    { name: "DevOps", selected: true },
    { name: "Cloud Computing", selected: false },
    { name: "Data Science", selected: false },
    { name: "Blockchain", selected: false },
    { name: "Game Development", selected: false },
    { name: "Security", selected: false },
    { name: "UI/UX", selected: false },
    { name: "API Development", selected: false },
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
        name="Alex Chen"
        handle="alexchen"
        level={8}
        points={2450}
        githubUser="alexchen"
      />

      <SelectionCards
        title="Preferred Programming Languages"
        description="Select languages you're comfortable working with. This helps us recommend relevant repositories."
        tags={languages}
        activeColor="blue"
      />

      <SelectionCards
        title="Technical Interests"
        description="Choose topics you're interested in to refine repository recommendations."
        tags={interests}
        activeColor="purple"
      />
      <RecommendationInfoCard />
    </div>
  );
}
