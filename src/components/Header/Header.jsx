import { Link, NavLink } from "react-router-dom";
import LogoIcon from "@assets/icons/Header/Logo.svg?react";
import SearchBarIcon from "@assets/icons/Header/SearchBar.svg?react";
import HeartIcon from "@assets/icons/Header/Heart.svg?react";
import CartIcon from "@assets/icons/Header/Cart.svg?react";
import ProfileIcon from "@assets/icons/Header/Profile.svg?react";
import MenuIcon from "@assets/icons/Header/Menu.svg?react";

import "./Header.css";
import { PATH } from "@constants/path";

export default function Header() {
  return (
    <>
      <header className="header-container">
        <ul className="header-section">
          <li className="header-logo">
            <a href="/">
              <LogoIcon width="65.4" height="22.87" />
            </a>
          </li>
          <li className="header-search">
            <div className="search-bar">
              <SearchBarIcon width="20" height="20" />
              <input type="text" placeholder="Search" />
            </div>
          </li>
          <li>
            <nav className="header-nav">
              {PATH.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {item.content}
                </NavLink>
              ))}
            </nav>
          </li>
          <li className="header-icons">
            <HeartIcon />
            <CartIcon />
            <ProfileIcon />
          </li>
          <li className="hamburger-icons">
            <MenuIcon width="40" height="40" />
          </li>
        </ul>
      </header>
    </>
  );
}
