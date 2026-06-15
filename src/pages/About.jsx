import InnerPageHeader from "../components/layout/InnerPageHeader.jsx";
import Footer from "../components/layout/Footer.jsx";

import authorPhoto from "../assets/about/author-photo.png";
import blueRectangle from "../assets/about/blue_rectangle.png";

import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      <InnerPageHeader />
      <main className="about">
        <section className="about__content">

          <h1 className="about__title">Об авторе</h1>

          <div className="about__text">
            <p>
              Этот проект для меня — не просто сайт о культуре корё-сарам. Это
              попытка собрать воедино историю, которую я долгое время не могла
              объяснить даже самой себе.
            </p>

            <p>
              В детстве мне было сложно отвечать на простые, на первый взгляд,
              вопросы: откуда я, кто я, почему, если я кореянка, то говорю на
              русском языке? Почему моя культура кажется мне одновременно близкой и
              далёкой? Эти вопросы долго оставались без ясного ответа, 
              в компании вызывая смущение и растерянность.
            </p>

            <p>
              Со временем, узнавая историю корё-сарам, историю переселения,
              депортации, жизни в Центральной Азии и сохранения традиций вдали
              от исторической родины, я начала лучше понимать не только прошлое
              своего народа, но и саму себя.
            </p>

            <p>
              Для меня этот сайт — способ бережно рассказать о людях, которые
              прошли через тяжёлые испытания, но сохранили память, культуру,
              семью и чувство общности. Это проект о поиске идентичности, о
              связи поколений и о том, как знание своей истории помогает
              почувствовать себя целостнее.
            </p>
          </div>
        </section>

        <section className="about__photo-card" aria-label="Фотография автора">
        <img
            src={blueRectangle}
            alt=""
            className="about__blue-rectangle"
        />

        <img
            src={authorPhoto}
            alt="Автор проекта"
            className="about__author-photo"
        />
        </section>
      </main>

      <Footer />
    </div>
  );
}