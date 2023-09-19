import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdOutlineMoney,
  MdOutlineBuild,
  MdLock
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import NeedDeveloper from "components/needDeveloper";
import Developer from "components/developerPage";
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="grey" />,
    component: MainDashboard,
  },
  {
    name: "Help Me Code",
    layout: "/onboard",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="grey" />,
    component: MainDashboard,
  },
  {
    name: "Find Developer",
    layout: "/admin",
    path: "/need-developer",
    icon: <Icon as={MdOutlineBuild} width="20px" height="20px" color="grey" />,
    component: NeedDeveloper,
  },
  {
    name: "Find Work",
    layout: "/admin",
    path: "/developer",
    icon: <Icon as={MdOutlineMoney} width="20px" height="20px" color="grey" />,
    component: Developer,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="grey" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },

];

export default routes;
