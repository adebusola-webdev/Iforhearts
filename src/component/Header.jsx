import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import Formpop from "./Formpop";
import { Loginform } from "./Loginform";

export const Header = () => {
  const [activeForm, setActiveForm] = useState(null); // null, 'signup', or 'login'
  const [dropdown, setDropdown] = useState(null); // null, 'occ', 'shop', or 'payments'
  const [isOpen, setIsOpen] = useState(false);

  const openSignup = () => setActiveForm("signup");
  const openLogin = () => setActiveForm("login");
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section className="header_section">
        <div className={`header ${isSticky ? "sticky" : ""}`}>
          <div className="nav__bar__top">
            <Link className="logo" to='/'>
              Inkfor<span>hearts</span>{" "}
            </Link>

            <ul className={`nav_list ${isOpen ? "open" : ""}`}> 
              <li
                className="list-with-dropdown"
                onMouseEnter={() => handleMouseEnter("occ")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="dropdown-label">
                  <Link to="occ" className="list_item">
                    Occasion
                  </Link>
                </span>
                {dropdown === "occ" && (
                  <div className="dropdown-container">
                    <ul className="dropdown">
                      <li className="dropdown-list">
                        <NavLink to="wday" className='dropdown_link'>wedding</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="/bday" className='dropdown_link'>birthday</NavLink>
                      </li>

                      <li className="dropdown-list">
                        <NavLink to="aday" className='dropdown_link'>anniversary</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="pday" className='dropdown_link'  >purposal</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="mday" className='dropdown_link'>mother's day</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="fday" className='dropdown_link'>father's day</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="vday" className='dropdown_link'>valentine</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="chrisday" className='dropdown_link'>christmas</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="vday" className='dropdown_link'>valentine's day</NavLink>
                      </li>
                      <li className="dropdown-list">
                        <NavLink to="aday" className='dropdown_link'>anniversary</NavLink>
                      </li>
                     
                    </ul>
                  </div>
                )}
              </li>

              <li className="list_item">
                <Link>Shop</Link>
              </li>
              <li className="list_item">
                <Link>Account</Link>
              </li>
              <li className="list_item">
                {" "}
                <button onClick={openSignup}> sign up</button>
              </li>
            </ul>
            <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </button>
          </div>
 
         
        </div>
        <div className="lunch__sale__con">
          <p>opening soon watch out!</p>
        </div>
        {activeForm === "signup" && (
          <Formpop
            onSwitchToLogin={() => {
              closeForm();
              openLogin();
            }}
            onClose={closeForm}
          />
        )}
        {activeForm === "login" && (
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
