import "./Landing.scss";
import Button from "../../components/Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsPresent } from "framer-motion";
import GithubSvg from "../../svgs/GithubSvg";
import LinkedinSvg from "../../svgs/LinkedinSvg";
import TransitionScreen from "../../components/TransitionScreen/TransitionScreen";
import Navbar from "../../components/Navbar/Navbar";
import { Variants } from "framer-motion";

const greetingAnimated = "hi, i'm ruwpy".split(" ");

export default function Landing() {
  const isPresent = useIsPresent();

  const appearAnimation: Variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: (custom) => ({
      transition: { delay: custom * 0.1 },
      y: 0,
      opacity: 1,
    }),
  };

  return (
    <>
      <main className="main primary">
        <AnimatePresence>
          <Navbar />
          <motion.div
            animate="animate"
            initial="initial"
            className="landing container"
          >
            <div className="hero">
              <h1 className="hero__greating text-outline--light">
                {greetingAnimated.map((word, index) => {
                  return (
                    <motion.span
                      custom={index}
                      variants={appearAnimation}
                      key={index}
                    >
                      {word.split("").map((letter, index) => {
                        return (
                          <motion.span
                            key={index}
                            className="hero__letter"
                            whileHover={{
                              scale: 1.15,
                              rotate:
                                Math.floor(Math.random() * 90) - 45 + "deg",
                              transition: { duration: 0.2, type: "spring" },
                            }}
                          >
                            {letter}
                          </motion.span>
                        );
                      })}
                    </motion.span>
                  );
                })}
              </h1>
              <motion.p
                variants={appearAnimation}
                custom={4}
                className="hero__introduction"
              >
                a <span className="hl">creative frontend developer</span> who{" "}
                <br /> loves building <br /> amazing websites
              </motion.p>
            </div>
            <footer className="footer container">
              <div className="footer__content">
                <motion.div variants={appearAnimation} custom={5}>
                  <Link to="about">
                    <Button style="primary">explore</Button>
                  </Link>
                </motion.div>
                <motion.div
                  variants={appearAnimation}
                  custom={6}
                  className="footer__buttons"
                >
                  <Link to="https://github.com/ruwpy" target="_blank">
                    <Button type="icon" style="primary">
                      <GithubSvg />
                    </Button>
                  </Link>
                  <Button type="icon" style="primary">
                    <LinkedinSvg />
                  </Button>
                </motion.div>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
      <TransitionScreen isPresent={isPresent} />
    </>
  );
}
