import { Link, NavLink } from "react-router-dom";
import knotlogo from "../../assets/home/knotlogo.png";
import "./InnerPageHeader.css";

export default function InnerPageHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo-link">
        <img src={knotlogo} alt="На главную" className="site-header__logo" />
      </Link>

      <nav className="site-header__nav">
        <NavLink to="/history">История</NavLink>
        <NavLink to="/language">Язык</NavLink>
        <NavLink to="/modern">Современные корё-сарам</NavLink>
        <NavLink to="/traditions">Традиции</NavLink>
        <NavLink to="/holidays">Праздники</NavLink>
        <NavLink to="/kitchen">Кухня</NavLink>
        <NavLink to="/about">Об авторе</NavLink>
      </nav>
    </header>
  );
}