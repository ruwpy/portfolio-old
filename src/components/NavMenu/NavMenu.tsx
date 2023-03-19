import { AnimatePresence, motion as m, Variants } from "framer-motion";
import { SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowSvg } from "../Svgs";
import "./NavMenu.scss";

const isMobile = window.innerWidth < 768;
let linkAppear: Variants;

if (!isMobile) {
  linkAppear = {
    initial: { y: "-100%" },
    animate: (custom) => ({
      y: 0,
      transition: { duration: 0.3, delay: 0.08 * custom },
    }),
    exit: (custom) => ({
      y: "-100%",
      transition: { duration: 0.3, delay: 0.08 * custom },
    }),
  };
} else {
  linkAppear = {
    initial: { x: "-100%" },
    animate: (custom) => ({
      x: 0,
      transition: { duration: 0.3, delay: 0.08 * custom },
    }),
    exit: (custom) => ({
      x: "-100%",
      transition: { duration: 0.3, delay: 0.08 * custom },
    }),
  };
}

export default function NavMenu({
  isNavOpen,
  setIsNavOpen,
  isThemeDark,
}: {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<SetStateAction<boolean>>;
  isThemeDark?: boolean;
}) {
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "scroll";
  }, [isNavOpen]);

  const links = (
    <>
      <m.span
        variants={linkAppear}
        custom={1}
        className={`navmenu__link-container ${isThemeDark && "dark"}`}
      >
        <Link className="navmenu__link" to="/projects">
          <span className="navmenu__link-content">
            <m.span>/projects</m.span>
            <ArrowSvg className="navmenu__arrow" isDark={isThemeDark} />
          </span>
        </Link>
      </m.span>

      <m.span
        variants={linkAppear}
        custom={2}
        className={`navmenu__link-container ${isThemeDark && "dark"}`}
      >
        <Link className="navmenu__link" to="/about">
          <span className="navmenu__link-content">
            <m.span>/about</m.span>
            <ArrowSvg className="navmenu__arrow" isDark={isThemeDark} />
          </span>
        </Link>
      </m.span>

      <m.span
        variants={linkAppear}
        custom={3}
        className={`navmenu__link-container ${isThemeDark && "dark"}`}
      >
        <Link className="navmenu__link" to="/contact">
          <span className="navmenu__link-content">
            <m.span>/contact</m.span>
            <ArrowSvg className="navmenu__arrow" isDark={isThemeDark} />
          </span>
        </Link>
      </m.span>
    </>
  );

  return (
    <AnimatePresence mode="sync">
      {isNavOpen && (
        <m.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="navmenu"
          onClick={() => setIsNavOpen(false)}
        >
          <m.div
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`navmenu__content`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`navmenu__links ${isThemeDark && "dark"}`}>
              {links}
            </div>
          </m.div>
        </m.nav>
      )}
    </AnimatePresence>
  );
}
