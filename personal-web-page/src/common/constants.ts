import Api from "../components/api/Api";
import Home from "../components/home/Home";
import Skills from "../components/skills/Skills";
import Journeys from "../components/journeys/Journeys";
import Career from "../components/career/Career";
import HolidayFinder from "../components/holiday-finder/HolidayFinder";

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
    label: "career",
    component: Career,
  },
  {
    label: "holiday",
    component: HolidayFinder,
  },
  {
    label: "api",
    component: Api,
  },
  {
    label: "journeys",
    component: Journeys,
  },
];

type Journey = {
  place: string;
  desc: string;
  imgSrcs: string[];
};

export const journeys: Journey[] = [
  {
    place: "Cyprus",
    desc: "May 2024 - Larnaca/Ayia Napa/Nicosia",
    imgSrcs: [
      "/tripPics/cyprus/1.png",
      "/tripPics/cyprus/2.png",
      "/tripPics/cyprus/3.png",
      "/tripPics/cyprus/4.png",
    ],
  },
  {
    place: "Sighisoara",
    desc: "May 2025 - Sighisoara citadel",
    imgSrcs: [
      "/tripPics/sighisoara/1.png",
      "/tripPics/sighisoara/2.png",
      "/tripPics/sighisoara/3.png",
      "/tripPics/sighisoara/4.png",
    ],
  },
  {
    place: "Untold",
    desc: "August 2025 - Stadium & surrounding areas",
    imgSrcs: [
      "/tripPics/untold/1.png",
      "/tripPics/untold/2.png",
      "/tripPics/untold/3.png",
    ],
  },
  {
    place: "Rachitele",
    desc: "March 2024 - Valul Miresei",
    imgSrcs: [
      "/tripPics/rachitele/1.png",
      "/tripPics/rachitele/2.png",
      "/tripPics/rachitele/3.png",
    ],
  },
  {
    place: "Greece",
    desc: "June 2023 - Trikala/Skiathos/Macedonia",
    imgSrcs: [
      "/tripPics/greece/1.png",
      "/tripPics/greece/2.png",
      "/tripPics/greece/3.png",
      "/tripPics/greece/4.png",
    ],
  },
  {
    place: "Italy",
    desc: "September 2025 - Bologna/Ferrara/Florence",
    imgSrcs: [
      "/tripPics/italy/1.png",
      "/tripPics/italy/2.png",
      "/tripPics/italy/3.png",
      "/tripPics/italy/4.png",
    ],
  },
];
