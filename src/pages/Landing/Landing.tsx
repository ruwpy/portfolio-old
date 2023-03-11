import "./Landing.scss";
import Button from "../../components/Button/Button";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsPresent } from "framer-motion";
import MailSvg from "../../svgs/MailSvg";
import GithubSvg from "../../svgs/GithubSvg";
import LinkedinSvg from "../../svgs/LinkedinSvg";

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

const greetingAnimated = "hi, i'm ruwpy".split(" ");

export default function Landing() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isPresent = useIsPresent();

  const links = (
    <>
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
    </>
  );

  return (
    <>
      <main className="main container">
        <div className="header">
          <div className="header__nav hide-for-mobile">{links}</div>
          <motion.div
            animate={isNavOpen ? "open" : "closed"}
            onClick={() => setIsNavOpen((prev) => !prev)}
            className={`header__burger hide-for-pc ${isNavOpen && "active"}`}
          >
            <motion.span
              variants={{ open: { rotate: "45deg" }, closed: { rotate: 0 } }}
            ></motion.span>
            <motion.span
              variants={{ open: { rotate: "-45deg" }, closed: { rotate: 0 } }}
            ></motion.span>
          </motion.div>
          <AnimatePresence mode="wait">
            {isNavOpen && (
              <motion.div
                animate="open"
                initial="closed"
                exit="closed"
                className={`header__nav hide-for-pc ${isNavOpen && "active"}`}
              >
                {links}
                <motion.div
                  variants={lineVariants}
                  animate={"open"}
                  exit={"closed"}
                  className="header__line"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="header__contact">
            <a href="mailto:ruwpy.who@gmail.com">
              <Button type="icon" style="primary">
                <MailSvg />
              </Button>
            </a>
          </div>
        </div>
        <div className="hero">
          <h1 className="hero__greating">
            {greetingAnimated.map((word) => {
              return (
                <span>
                  {word.split("").map((letter) => {
                    return (
                      <motion.span
                        className="hero__letter"
                        whileHover={{
                          scale: 1.15,
                          rotate: Math.floor(Math.random() * 90) - 45 + "deg",
                          transition: { duration: 0.2, type: "spring" },
                        }}
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                </span>
              );
            })}
          </h1>
          <p className="hero__introduction">
            a <span className="hl">creative frontend developer</span> who <br />{" "}
            loves building <br /> amazing websites
          </p>
        </div>
        <div className="footer">
          <Link to="projects">
            <Button style="primary">explore</Button>
          </Link>
          <div className="footer__buttons">
            <Link to="https://github.com/ruwpy" target="_blank">
              <Button type="icon" style="primary">
                <GithubSvg />
              </Button>
            </Link>
            <Button type="icon" style="primary">
              <LinkedinSvg />
            </Button>
          </div>
        </div>
      </main>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.8, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 0.8, ease: "circIn" } }}
        style={{ originY: isPresent ? 1 : 0 }}
        className="privacy-screen"
      />
    </>
  );
}
