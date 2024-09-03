
import React, { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import Formpop from "./Formpop";
import { Loginform } from "./Loginform";

export const Header = () => {
  const [activeForm, setActiveForm] = useState(null); // null, 'signup', or 'login'
  const [dropdown, setDropdown] = useState(null); // null, 'occ', 'shop', or 'payments'

  const openSignup = () => setActiveForm('signup');
  const openLogin = () => setActiveForm('login');
  const closeForm = () => setActiveForm(null);

  const handleMouseEnter = (dropdownType) => setDropdown(dropdownType);
  const handleMouseLeave = () => setDropdown(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);







  return (
    <div>
      <section className="header_section">
        <div className={`header ${isSticky ? 'sticky' : ''}`}>
          <div className="nav__bar__top">
            <Link className="logo">Inkfor<span>hearts</span> </Link>
            {/* <ul className="top_nav_list">
              <li className="list__item">
                <NavLink>order status </NavLink>
              </li>
              <li className="list__item">
                <NavLink onClick={openLogin}> log in</NavLink>
              </li>
              <li className="list__item">
                <button onClick={openSignup}> sign up</button>
              </li>
            </ul> */}
            <ul className="nav_list">
              <li className="list_item"><Link>Occasion</Link></li>
              <li className="list_item"><Link>Shop</Link></li>
              <li className="list_item"><Link>Account</Link></li>
              <li className="list_item"> <button onClick={openSignup}> sign up</button></li>
            </ul>
          </div>
          {/* <div className="nav__bar__bottom">
            <ul className="under__header__list">
              <li
                className="list-with-dropdown"
                onMouseEnter={() => handleMouseEnter('occ')}
                onMouseLeave={handleMouseLeave}
              >
                <span className="dropdown-label">
                  <Link to='occ'>Occasion</Link>
                </span>
                {dropdown === 'occ' && (
                  <div className="dropdown-container">
                    <ul className="dropdown">
                      <li className="dropdown-list">
                        <NavLink to='/bday'>birthday</NavLink>
                        <NavLink to='wday'>wedding</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to='aday'>anniversary</NavLink>
                        <NavLink to='pday'>purposal</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to='mday'>mother's day</NavLink>
                        <NavLink to='fday'>father's day</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to='chrisday'>christmas</NavLink>
                        <NavLink to='Vday'>valentine's day</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
            <ul className="under__header__list">
              <li
                className="list-with-dropdown"
                onMouseEnter={() => handleMouseEnter('shop')}
                onMouseLeave={handleMouseLeave}
              >
                <span className="dropdown-label">shop</span>
                {dropdown === 'shop' && (
                  <div className="dropdown-container">
                    <ul className="dropdown">
                      <li className="dropdown-list">
                        <NavLink>birthday</NavLink>
                        <NavLink>wedding</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink>anniversary</NavLink>
                        <NavLink>purposal</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink>mother's day</NavLink>
                        <NavLink>father's day</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink>wedding</NavLink>
                        <NavLink>wedding</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
            <ul className="under__header__list">
              <li
                className="list-with-dropdown"
                onMouseEnter={() => handleMouseEnter('payments')}
                onMouseLeave={handleMouseLeave}
              >
                <span className="dropdown-label">Payments</span>
                {dropdown === 'payments' && (
                  <div className="dropdown-container">
                    <ul className="dropdown">
                      
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div> */}
        </div>
        <div className="lunch__sale__con">
          <p>opening soon watch out!</p>
        </div>
        {activeForm === 'signup' && (
          <Formpop
            onSwitchToLogin={() => {
              closeForm();
              openLogin();
            }}
            onClose={closeForm}
          />
        )}
        {activeForm === 'login' && (
          <Loginform
            onSwitchToSignup={() => {
              closeForm();
              openSignup();
            }}
            onClose={closeForm}
          />
        )}
      </section>
    </div>
  );
};

