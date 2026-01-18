import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/landingAuth";
import HomePage from "./pages/Home";
import RepoDetail from "./pages/RepoDetail";
import IssueDetail from "./pages/IssueDetail";
import Discover from "./pages/Discover";
import LayoutChatbot from "./pages/LayoutChatbot";
import MyWork from "./pages/MyWork";
import Profile from "./pages/Profile";
import { UserProvider } from "./context/UserContext";
import { RepoProvider } from "./context/RepoContext";
import NotFound from "./pages/NotFound";
function App() {
  const repoInfo = {
    name: "cloud-infrastructure",
    describution: "Infrastructure as code templates for AWS,Azure,and GCP",
    star: 5432,
    fork: 734,
    contributers: 37,
    tags: ["TypeScript", "Python"],
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route
          path="/home"
          element={
            <UserProvider>
              {/*provider have to wrap the component it self not the route! */}
              <RepoProvider>
                <HomePage />
              </RepoProvider>
            </UserProvider>
          }
        >
          <Route index element={<Discover />} />

          <Route element={<LayoutChatbot />}>
            <Route path="repoDetail/:id" element={<RepoDetail repo={repoInfo} />} />
            <Route path="issueDetail/:id" element={<IssueDetail />} />
          </Route>

          <Route path="myWork" element={<MyWork />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
