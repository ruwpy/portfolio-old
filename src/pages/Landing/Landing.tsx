import "./Landing.scss";
import Button from "../../components/Button/Button";
import { AnimatePresence, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsPresent } from "framer-motion";
import TransitionScreen from "../../components/TransitionScreen/TransitionScreen";
import Navbar from "../../components/Navbar/Navbar";
import { Variants } from "framer-motion";

const greetingAnimated = "hi, i'm ruwpy".split(" ");

export default function Landing() {
  const isPresent = useIsPresent();

  const appearAnimation: Variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: (custom) => ({
      transition: { delay: custom * 0.15 },
      y: 0,
      opacity: 1,
    }),
  };

  return (
    <>
      <AnimatePresence>
        <Navbar />
        <m.main
          key="landing-page"
          animate="animate"
          initial="initial"
          className="main primary"
        >
          <div className="landing container">
            <div className="hero">
              <h1 className="hero__greating text-outline--light">
                {greetingAnimated.map((word, index) => {
                  return (
                    <m.span
                      custom={index + 2}
                      variants={appearAnimation}
                      key={index}
                    >
                      {word.split("").map((letter, index) => {
                        return (
                          <m.span
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
                          </m.span>
                        );
                      })}
                    </m.span>
                  );
                })}
              </h1>
              <m.p
                variants={appearAnimation}
                custom={5}
                className="hero__introduction"
              >
                a <span className="hl">creative frontend developer</span> who{" "}
                <br /> loves building <br /> amazing websites
              </m.p>
              <m.div variants={appearAnimation} custom={6}>
                <Link to="about">
                  <Button buttonStyle="primarywdot">explore</Button>
                </Link>
              </m.div>
            </div>
          </div>
        </m.main>
      </AnimatePresence>
      <TransitionScreen isPresent={isPresent} />
    </>
  );
}
