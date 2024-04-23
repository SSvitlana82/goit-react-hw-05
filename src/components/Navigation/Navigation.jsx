import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={css.homeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.trandingLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
