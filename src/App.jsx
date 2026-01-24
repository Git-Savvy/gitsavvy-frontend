import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/landingAuth";
import HomePage from "./pages/Home";
import RepoDetail from "./pages/RepoDetail";
import IssueDetail from "./pages/IssueDetail";
import Discover from "./pages/Discover";
import LayoutChatbot from "./pages/LayoutChatbot";
import MyWork from "./pages/MyWork";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { RepoProvider } from "./context/RepoContext";
import { IssueProvider } from "./context/IssueContext";
import { MetricsProvider } from "./context/MetricsContext";
import { ReadmeProvider } from "./context/ReadmeContext";
import { DocsProvider } from "./context/DocsContext";
import NotFound from "./pages/NotFound";
import ThemeSwitcher from "./components/common/ThemeSwitcher";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeProvider>
                <AuthPage />
              </ThemeProvider>
            }
          />

          <Route
            path="/home"
            element={
              <ThemeProvider>
                <DocsProvider>
                  <IssueProvider>
                    <UserProvider>
                      {/*provider have to wrap the component it self not the route! */}
                      <RepoProvider>
                        <HomePage />
                      </RepoProvider>
                    </UserProvider>
                  </IssueProvider>
                </DocsProvider>
              </ThemeProvider>
            }
          >
            <Route index element={<Discover />} />
            <Route element={<LayoutChatbot />}>
              <Route
                path="repoDetail/:repoId"
                element={
                  <MetricsProvider>
                    <ReadmeProvider>
                      <RepoDetail />
                    </ReadmeProvider>
                  </MetricsProvider>
                }
              />
              <Route
                path="repoDetail/:repoId/issueDetail/:issueId"
                element={<IssueDetail />}
              />
            </Route>
            <Route path="myWork" element={<MyWork />} />{" "}
            {/*All nested routes inherit the parent element tree.So React renders:
             MyWork has access to:UserContext, RepoContext */}
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route
            path="*"
            element={
              <NotFound
                text="  The page you’re looking for doesn’t exist or has been moved."
                button="Go Home"
                url="/home"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
