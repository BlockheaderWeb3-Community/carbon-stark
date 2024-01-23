import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import NoScroll from "./components/NoScroll";
import AppLayoutMain from "./components/AppLayoutMain";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import ImpactPage from "./pages/ImpactPage";
import ProfilePage from "./pages/ProfilePage";
import CarbonFootprintPage from "./pages/CarbonFootprintPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="connect" />} />
          <Route
            path="/connect"
            element={
              <NoScroll>
                <AppLayout />
              </NoScroll>
            }
          >
            <Route index element={<Navigate replace to="connect" />} />
            <Route path="connect" element={<LandingPage />} />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppLayoutMain />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="impact" element={<ImpactPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="carbon-footprint" element={<CarbonFootprintPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
