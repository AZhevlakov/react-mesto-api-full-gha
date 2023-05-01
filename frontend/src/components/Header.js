import React, { memo, useState } from 'react';
import logo from '../images/logo.svg';
import burgerIcon from '../images/burger-menu-icon.svg';
import closeIcon from '../images/close-icon.svg';
import { useLocation, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Header = memo(({ loggedIn, onSignOut, userEmail }) => {
  const location = useLocation().pathname;
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <header className="header">
      {
        isBurgerOpen
        &&
        <MediaQuery maxWidth={659}>
          <div className="header__profile header__profile_burger-menu">
            <span className="header__email">
              {userEmail}
            </span>
            <button onClick={onSignOut} className="btn header__sign-out">
              Выйти
            </button>
          </div>
        </MediaQuery>
      }
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Логотип Mesto" />
        {
          loggedIn
          &&
          <MediaQuery maxWidth={659}>
            {(matches) => {
              if (matches) {
                return (
                  <button
                    onClick={handleBurgerClick}
                    className="btn header__burger-menu"
                    style={{
                      backgroundImage: `url(${isBurgerOpen ? closeIcon : burgerIcon})`,
                      width: `${isBurgerOpen ? '20px' : '24px'}`,
                      height: `${isBurgerOpen ? '20px' : '21px'}`
                    }}
                  />
                )
              } else {
                return (
                  <div className="header__profile">
                    <span className="header__email">
                      {userEmail}
                    </span>
                    <button onClick={onSignOut} className="btn header__sign-out">
                      Выйти
                    </button>
                  </div>
                )
              }
            }}
          </MediaQuery>
        }
        {
          !loggedIn
          &&
          (location === "/signin")
          &&
          <Link to="/signup" className="btn header__link">
            Регистрация
          </Link>
        }
        {
          !loggedIn
          &&
          (location === "/signup")
          &&
          <Link to="/signin" className="btn header__link">
            Войти
          </Link>
        }
      </div>
    </header>
  );
});

export default Header;
