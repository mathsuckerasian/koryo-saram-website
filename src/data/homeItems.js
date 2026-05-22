import suitcase from "../assets/home/suitcase.png";
import shoes from "../assets/home/shoes.png";
import bowlmain from "../assets/home/bowlmain.png";
import camera from "../assets/home/camera.png";
import pouch from "../assets/home/pouch.png";
import calligraphypaper from "../assets/home/calligraphypaper.png";
import knotlogo from "../assets/home/knotlogo.png";

export const homeItems = [
  {
    id: "history",
    title: "История",
    path: "/history",
    image: suitcase,
    className: "item-history",
  },
  {
    id: "language",
    title: "Язык",
    path: "/language",
    image: calligraphypaper,
    className: "item-language",
  },
  {
    id: "modern",
    title: "Современные корё-сарам",
    path: "/modern",
    image: camera,
    className: "item-modern",
  },
  {
    id: "traditions",
    title: "Традиции",
    path: "/traditions",
    image: shoes,
    className: "item-traditions",
  },
  {
    id: "holidays",
    title: "Праздники",
    path: "/holidays",
    image: pouch,
    className: "item-holidays",
  },
  {
    id: "kitchen",
    title: "Кухня",
    path: "/kitchen",
    image: bowlmain,
    className: "item-kitchen",
  },
  {
    id: "about",
    title: "Об авторе",
    path: "/about",
    image: knotlogo,
    className: "item-about",
  },
];