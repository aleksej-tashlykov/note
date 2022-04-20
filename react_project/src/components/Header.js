import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="main-header header">
        <div className="container">
          <div className="header-wrap">
            <div className="header-logo">
              <img
                src="/img/logo.png"
                alt="tricky notes"
                width="99"
                height="35"
              />
            </div>
            <nav className="main-nav">
              <ul className="site-nav">
                <li className="site-nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "site-nav-link"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="site-nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "site-nav-link"
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="site-nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "site-nav-link"
                    }
                    to="/create"
                  >
                    Create
                  </NavLink>
                </li>
                <li className="site-nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "site-nav-link"
                    }
                    to="/note"
                  >
                    Note
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
