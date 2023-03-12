import { Variants, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import MailSvg from "../../svgs/MailSvg";
import "./Navbar.scss";

export default function Navbar({ isThemeDark }: { isThemeDark?: boolean }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const lineVariants: Variants = {
    closed: {
      height: "0rem",
    },
    open: {
      height: "11rem",
    },
  };

  const navLinksVariants: Variants = {
    closed: {
      opacity: 0,
    },
    open: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  const links = (
    <AnimatePresence mode="wait">
      <Link to="/projects">
        <motion.span custom={1} variants={navLinksVariants} className="link">
          projects
        </motion.span>
      </Link>
      <Link to="/about">
        <motion.span custom={2} variants={navLinksVariants} className="link">
          about
        </motion.span>
      </Link>
      <Link to="/contact">
        <motion.span custom={3} variants={navLinksVariants} className="link">
          contact
        </motion.span>
      </Link>
    </AnimatePresence>
  );

  return (
    <div className="header container">
      <motion.nav
        initial="closed"
        animate="open"
        className={`header__nav hide-for-mobile ${isThemeDark && "dark"}`}
      >
        {links}
      </motion.nav>
      <motion.div
        animate={isNavOpen ? "open" : "closed"}
        onClick={() => setIsNavOpen((prev) => !prev)}
        className={`header__burger hide-for-pc ${isNavOpen && "active"} ${
          isThemeDark && "dark"
        }`}
      >
        <motion.span
          variants={{ open: { rotate: "45deg" }, closed: { rotate: 0 } }}
        ></motion.span>
        <motion.span
          variants={{ open: { rotate: "-45deg" }, closed: { rotate: 0 } }}
        ></motion.span>
      </motion.div>
      {isNavOpen && (
        <motion.nav
          animate="open"
          initial="closed"
          exit="closed"
          className={`header__nav hide-for-pc ${isNavOpen && "active"} ${
            isThemeDark && "dark"
          }`}
        >
          {links}
          <motion.div
            variants={lineVariants}
            animate={"open"}
            exit={"closed"}
            className="header__line"
          />
        </motion.nav>
      )}
      <motion.div
        animate="open"
        initial="closed"
        variants={navLinksVariants}
        custom={1}
        className="header__contact"
      >
        <Link to="mailto:ruwpy.who@gmail.com">
          <Button type="icon" style="primary">
            <MailSvg />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
