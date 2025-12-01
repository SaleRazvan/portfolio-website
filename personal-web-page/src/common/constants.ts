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
      "/tripPics/cyprus/1.webp",
      "/tripPics/cyprus/2.webp",
      "/tripPics/cyprus/3.webp",
      "/tripPics/cyprus/4.webp",
    ],
  },
  {
    place: "Sighisoara",
    desc: "May 2025 - Sighisoara citadel",
    imgSrcs: [
      "/tripPics/sighisoara/1.webp",
      "/tripPics/sighisoara/2.webp",
      "/tripPics/sighisoara/3.webp",
      "/tripPics/sighisoara/4.webp",
    ],
  },
  {
    place: "Untold",
    desc: "August 2025 - Stadium & surrounding areas",
    imgSrcs: [
      "/tripPics/untold/1.webp",
      "/tripPics/untold/2.webp",
      "/tripPics/untold/3.webp",
    ],
  },
  {
    place: "Rachitele",
    desc: "March 2024 - Valul Miresei",
    imgSrcs: [
      "/tripPics/rachitele/1.webp",
      "/tripPics/rachitele/2.webp",
      "/tripPics/rachitele/3.webp",
    ],
  },
  {
    place: "Greece",
    desc: "June 2023 - Trikala/Skiathos/Macedonia",
    imgSrcs: [
      "/tripPics/greece/1.webp",
      "/tripPics/greece/2.webp",
      "/tripPics/greece/3.webp",
      "/tripPics/greece/4.webp",
    ],
  },
  {
    place: "Italy",
    desc: "September 2025 - Bologna/Ferrara/Florence",
    imgSrcs: [
      "/tripPics/italy/1.webp",
      "/tripPics/italy/2.webp",
      "/tripPics/italy/3.webp",
      "/tripPics/italy/4.webp",
    ],
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthsMap: { [key: string]: string } = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};
