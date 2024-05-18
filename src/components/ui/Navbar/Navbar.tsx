import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { PDF_GENERATOR_ROUTE } from "../../routes/configs";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to={PDF_GENERATOR_ROUTE}>Генерация PDF</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
