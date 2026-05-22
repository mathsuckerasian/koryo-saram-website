import { Link } from "react-router-dom";
import knotlogo from "../../assets/home/knotlogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__left">
        <p className="site-footer__text">Есть что добавить? Расскажите нам:</p>
        <a className="site-footer__mail" href="mailto:sashaleena@mail.ru">
          sashaleena@mail.ru
        </a>
      </div>

      <div className="site-footer__center">
        <Link to="/" className="site-footer__logo-link">
          <img src={knotlogo} alt="На главную" className="site-footer__logo" />
        </Link>
      </div>

      <div className="site-footer__right">
        <Link to="/about" className="site-footer__about">
          Об авторе
        </Link>
      </div>
    </footer>
  );
}