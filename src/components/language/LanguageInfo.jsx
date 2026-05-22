import calligraphyPaper from "../../assets/home/calligraphypaper.png";
import brush from "../../assets/traditions/brush.png";
import splash from "../../assets/home/splash.png";

export default function LanguageInfo() {
  return (
    <section className="language-info">
      <h2 className="language-section-title">Корё-мар</h2>

        <img
          src={calligraphyPaper}
          alt=""
          className="language-info__decor language-info__decor--paper"
        />

        <img
          src={calligraphyPaper}
          alt=""
          className="language-info__decor language-info__decor--paper1"
        />

        <img
          src={splash}
          alt=""
          className="language-info__decor language-info__decor--splash"
        />

      <div className="language-info__content">
        <img
          src={brush}
          alt=""
          className="language-info__decor language-info__decor--brush"
        />
        
        <div className="language-info__text">
          <p>
            Корё-мар — это язык корё-сарам, который сформировался на основе
            северо-восточных диалектов корейского языка. Его история связана с
            переселением корейцев на Дальний Восток, последующей депортацией в
            Центральную Азию и жизнью в многоязычной среде.
          </p>

          <p>
            Со временем речь корё-сарам начала меняться: в ней сохранялись
            корейские слова и грамматические особенности, но постепенно
            появлялось влияние русского языка, языков Центральной Азии и
            советского быта. Поэтому корё-мар отличается от современного
            литературного корейского языка.
          </p>

          <p>
            Сегодня корё-мар часто существует не как язык официального общения,
            а как язык семьи и памяти. Он может сохраняться в отдельных словах,
            названиях блюд, обращениях к старшим, бытовых выражениях и фразах,
            которые передавались от поколения к поколению.
          </p>
        </div>

        <article className="language-info__special">
          <p>
            Особенность корё-мар в том, что он хранит не только слова, но и
            следы истории народа. Для многих корё-сарам он становится частью
            самоидентификации: напоминанием о семье, происхождении, утраченной
            и одновременно сохранённой связи с культурой.
          </p>
        </article>
      </div>
    </section>
  );
}