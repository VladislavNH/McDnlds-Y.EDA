import React from "react";
import _ from "./Header.module.css";
import logo from "../../assets/img/logo.svg";
import Container from "../Container/Container";

const Header = () => {
  return (
    <div>
      <header className={_.header}>
        <Container className={_.container}>
          <img className={_.logo} src={logo} alt="Логотип YourMeal" />
          <div className={_.wrapper}>
            <h1 className={_.title}>
              <span>Только самые</span>
              <span className={_.red}>сочные бургеры!</span>
            </h1>
            <p className={_.appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
