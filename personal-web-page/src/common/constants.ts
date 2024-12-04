import Api from "../components/api/Api";
import Home from "../components/home/Home";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";

export const navigationScreens = [
  {
    label: "home",
    component: Home,
  },
  {
    label: "skills",
    component: Skills,
  },
  {
    label: "services",
    component: Services,
  },
  {
    label: "api",
    component: Api,
  },
];
