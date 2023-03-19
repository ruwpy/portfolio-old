import { Variants, motion as m } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import { LogoSvg } from "../Svgs";
import "./Navbar.scss";

export const navAppear: Variants = {
  closed: {
    opacity: 0,
    y: 50,
  },
  open: (custom) => ({
    transition: { delay: custom * 0.1 },
    opacity: 1,
    y: 0,
  }),
  exit: {
    opacity: 0,
  },
};

export default function Navbar({ isThemeDark }: { isThemeDark?: boolean }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="nav container">
      <div className="nav__content">
        <Link to="/" className="nav__logo">
          <LogoSvg isDark={isThemeDark} />
        </Link>
        <div className="nav__buttons">
          <m.div
            animate="open"
            initial="closed"
            variants={navAppear}
            custom={1}
            className="nav__burger-container"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <m.div
              animate={isNavOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.4, type: "spring" }}
              className={`nav__burger ${isThemeDark && "dark"}`}
            >
              <m.span
                variants={{
                  open: { y: 5 },
                  closed: { y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              ></m.span>
              <m.span
                variants={{
                  open: { y: -5 },
                  closed: { y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              ></m.span>
            </m.div>
          </m.div>
        </div>
      </div>
      <NavMenu
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        isThemeDark={isThemeDark}
      />
    </div>
  );
}
