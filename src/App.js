import Header from "./components/Header";
import AboutSection from "./components/Sections/AboutSection";
import HomeSection from "./components/Sections/HomeSection";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PortFolioSection from "./components/Sections/PortFolioSection";
import ContactSection from "./components/Sections/ContactSection";
import TeamSection from "./components/Sections/TeamSection";

const AppLayout = () => {
  return (
    <div className="app font-sans">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeSection />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/portfolio",
        element: <PortFolioSection />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
      { path: "/team", element: <TeamSection/> },
    ],
  },
]);

export { AppRouter };
