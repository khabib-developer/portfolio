/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { Header } from "../Layout/style";
import { Logo, Moon, Icon } from "../Icons";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setTheme } from "../../store/reducers/themeReducer";
import { ThemeSwitch } from "../Icons/themeSwitch";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { theme } = useAppSelector((s) => s.theme);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
  }, [location]);
  return (
    <>
      <Header>
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container justify-content-between">
            <Link to="/portfolio" id="cardHover" className="logo nav-link px-0">
              CV
            </Link>

            <button
              className="navbar-toggler pr-0"
              type="button"
              aria-label="Open Button Toggle"
              onClick={() => setShow(true)}
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}
              id="collapsibleNavbar"
            >
              <div
                className="d-block d-lg-none close-nav"
                onClick={() => setShow((prev) => !prev)}
              >
                <Icon />
              </div>

              <ul className="navbar-nav ml-auto">
                <li
                  className={`nav-item hover__bottom  ${
                    location.pathname !== "/" ? "d-block" : "d-none"
                  } `}
                >
                  <Link
                    to="/portfolio"
                    title="Home"
                    className={"nav-link"}
                    id={"cardHover"}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item hover__bottom  ${
                    location.pathname !== "/skills" ? "d-block" : "d-none"
                  } `}
                >
                  <Link
                    to="/skills"
                    title="Home"
                    className={"nav-link"}
                    id={"cardHover"}
                  >
                    Skills
                  </Link>
                </li>
                <li
                  className={`nav-item hover__bottom  ${
                    location.pathname !== "/projects" ? "d-block" : "d-none"
                  } `}
                >
                  <Link
                    to="/projects"
                    title="Home"
                    className={"nav-link"}
                    id={"cardHover"}
                  >
                    Projects
                  </Link>
                </li>
                <li
                  className={`nav-item hover__bottom  ${
                    location.pathname !== "/resume" ? "d-block" : "d-none"
                  } `}
                >
                  <Link
                    to="/resume"
                    title="Home"
                    className={"nav-link"}
                    id={"cardHover"}
                  >
                    Resume
                  </Link>
                </li>
                <li
                  className="nav-item pl-md-3"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div
                    className="nav-svg cardButton"
                    onClick={() => dispatch(setTheme())}
                  >
                    <ThemeSwitch checked={Boolean(theme)} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default Navbar;
