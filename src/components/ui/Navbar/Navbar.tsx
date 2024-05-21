import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { DYNAMIC_PAGINATION_ROUTE, PDF_GENERATOR_ROUTE } from "../../routes/configs";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to={PDF_GENERATOR_ROUTE}>1. Генерация PDF</Link>
        </li>
        <li className="navbar__item">
          <Link to={DYNAMIC_PAGINATION_ROUTE}>2. Динамическая пагинация</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
