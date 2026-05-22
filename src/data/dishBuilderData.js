import meat from "../assets/kitchen/meat.png";
import noodles from "../assets/kitchen/noodles.png";
import tomato from "../assets/kitchen/tomato.png";
import egg from "../assets/kitchen/egg.png";
import kimchibowl from "../assets/kitchen/kimchibowl.png";
import cucumber from "../assets/kitchen/cucumber.png";

export const ingredients = [
  {
    id: "meat",
    name: "Мясо",
    image: meat,
    x: 270,
    y: -20,
    width: 220,
    plateClass: "plate-item--meat",
  },
  {
  id: "cucumber",
  name: "Огурец",
  image: cucumber,
  x: 180,
  y: 130,
  width: 180,
  plateClass: "plate-item--cucumber",
  },
  {
    id: "noodles",
    name: "Лапша",
    image: noodles,
    x: 200,
    y: 310,
    width: 300,
    plateClass: "plate-item--noodles",
  },
  {
    id: "tomato",
    name: "Помидор",
    image: tomato,
    x: 850,
    y: 450,
    width: 200,
    plateClass: "plate-item--tomato",
  },
  {
    id: "egg",
    name: "Яйцо",
    image: egg,
    x: 900,
    y: 10,
    width: 150,
    plateClass: "plate-item--egg",
  },
  {
    id: "kimchi",
    name: "Кимчи",
    image: kimchibowl,
    x: 990,
    y: 220,
    width: 250,
    plateClass: "plate-item--kimchi",
  },
];

export const finalDish = {
  title: "Кукси",
  description:
    "Холодное блюдо с лапшой, мясом, овощами и приправами — одно из самых узнаваемых блюд кухни корё-сарам.",
};