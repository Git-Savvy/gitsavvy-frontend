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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { LoginForm } from "./pages/LoginForm";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    // Global Providers must wrap the Router or the entire Routes tree
    <UserProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<AuthPage />} />
            {/* <Route path="/login" element={<LoginForm />} /> */}

            {/* PROTECTED ROUTES - Wrapped in the Gatekeeper */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <DocsProvider>
                    <IssueProvider>
                      <RepoProvider>
                        <HomePage />
                      </RepoProvider>
                    </IssueProvider>
                  </DocsProvider>
                </ProtectedRoute>
              }
            >
              {/* All these nested routes are now safe! */}
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
              <Route path="myWork" element={<MyWork />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound url="/home" />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </UserProvider>
  );
}
export default App;
