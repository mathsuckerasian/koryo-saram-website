import asyandi1 from "../assets/traditions/asyandi-1.png";
import asyandi2 from "../assets/traditions/asyandi-2.jpg";
import asyandi3 from "../assets/traditions/asyandi-3.jpg";

import wedding1 from "../assets/traditions/wedding-1.png";
import wedding2 from "../assets/traditions/wedding-2.jpeg";
import wedding3 from "../assets/traditions/wedding-3.jpg";

import hangabi1 from "../assets/traditions/hangabi-1.png";
import hangabi2 from "../assets/traditions/hangabi-2.png";
import hangabi3 from "../assets/traditions/hangabi-3.jpg";

import money from "../assets/traditions/money.png";
import threads from "../assets/traditions/threads.png";
import stethoscope from "../assets/traditions/stethoscope.png";
import rice from "../assets/traditions/rice.png";
import beans from "../assets/traditions/beans.png";
import chartogi from "../assets/traditions/chartogi.png";
import book from "../assets/traditions/book.png";
import hammer from "../assets/traditions/hammer.png";
import scissors from "../assets/traditions/scissors.png";
import brush from "../assets/traditions/brush.png";

export const mainTraditions = [
  {
    id: "asyandi",
    title: "Асянди",
    text:
      "Асянди — праздник первого года жизни ребёнка. В этот день семья собирается за праздничным столом, а перед ребёнком раскладывают предметы, каждый из которых имеет символическое значение. Считается, что выбранный предмет может обозначать будущие склонности, удачу или жизненный путь ребёнка.",
    photos: [asyandi1, asyandi2, asyandi3],
    align: "left",
  },
  {
    id: "wedding",
    title: "Свадьба",
    text:
      "Свадебные традиции корё-сарам соединяют уважение к семье, благословение старших и символику начала новой жизни. Важным остаётся не только сам обряд, но и участие родственников, совместный стол, поздравления и ощущение связи двух семей.",
    photos: [wedding1, wedding2, wedding3],
    align: "right",
  },
  {
    id: "hangabi",
    title: "Хангаби",
    text:
      "Хангаби — празднование 60-летия, которое считается важной жизненной датой. Этот возраст воспринимается как завершение большого жизненного круга и повод выразить уважение человеку, его опыту, труду и роли в семье.",
    photos: [hangabi1, hangabi2, hangabi3],
    align: "left",
  },
];

export const asyandiItems = [
  {
    id: "book",
    title: "Книга",
    meaning: "Символ знаний, учёбы, мудрости и стремления к образованию.",
    image: book,
    x: 51,
    y: 70,
    width: 270,
    rotate: 10,
  },
  {
    id: "brush",
    title: "Кисть",
    meaning: "Символ творчества, письма, искусства и способности выражать себя.",
    image: brush,
    x: 32,
    y: 67,
    width: 90,
    rotate: 0,
  },
  {
    id: "money",
    title: "Деньги",
    meaning: "Символ достатка, благополучия и материальной успешности.",
    image: money,
    x: 42,
    y: 42,
    width: 240,
    rotate: -20
  },
  {
    id: "threads",
    title: "Нитки",
    meaning: "Символ долгой жизни, здоровья и непрерывности жизненного пути.",
    image: threads,
    x: 39,
    y: 70,
    width: 190,
    rotate: 0,
  },
  {
    id: "rice",
    title: "Рис",
    meaning: "Символ сытости, изобилия, достатка и благополучия семьи.",
    image: rice,
    x: 50,
    y: 15,
    width: 530,
    tooltipGap: -380,
  },
{
  id: "beans",
  title: "Фасоль",
  meaning: "Символ трудолюбия, упорства и связи с земледельческим трудом.",
  image: beans,
  x: 25,
  y: 17,
  width: 190,
  rotate: -100,
  tooltipGap: -390,
},
{
  id: "chartogi",
  title: "Чартоги",
  meaning: "Праздничные рисовые лепёшки, символ достатка, благополучия и радостного события.",
  image: chartogi,
  x: 75,
  y: 18,
  width: 190,
  rotate: -3,
  tooltipGap: -410,
},
  {
    id: "scissors",
    title: "Ножницы",
    meaning: "Символ мастерства, ремесла, аккуратности и работы руками.",
    image: scissors,
    x: 82,
    y: 70,
    width: 150,
  },
  {
    id: "hammer",
    title: "Молоток",
    meaning: "Символ справедливости, ответственности, твёрдого характера и способности принимать важные решения.",
    image: hammer,
    x: 23,
    y: 63,
    width: 210,
    rotate: 0
  },
  {
    id: "stethoscope",
    title: "Стетоскоп",
    meaning: "Символ заботы о людях, медицины, помощи и внимательности.",
    image: stethoscope,
    x: 68,
    y: 59,
    width: 350,
    rotate: 5
  },
];