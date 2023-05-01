import { useIsPresent, motion as m, AnimatePresence } from "framer-motion";
import "./About.scss";
import Navbar from "@/components/Navbar/Navbar";
import TransitionScreen from "@/components/TransitionScreen/TransitionScreen";
import Button from "@/components/Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/Heading/Heading";

export default function About() {
  const isPresent = useIsPresent();
  const navigate = useNavigate();

  return (
    <>
      <AnimatePresence>
        <m.main key="about-page" animate="animate" initial="initial" className="main secondary">
          <Navbar isThemeDark />
          <div className="about container">
            <Heading>ABOUT ME</Heading>
            <p className="about__text">
              Self taught frontend developer with a passion about learning new skills, technologies
              . With a touch of creativity and empathy, I specialize in crafting refined modern
              websites with a focus on animated, responsive, and interactive content.
            </p>
            <div className="about__container">
              <m.div className="about__accent-box about__accent-box">
                <p className="about__text">
                  I have been building interfaces since 2021. something dragged me into learning{" "}
                  <span className="hl">HTML</span> and <span className="hl">CSS</span>. Then, I got
                  really interested in web development and started learning{" "}
                  <span className="hl">JavaScript</span>, <span className="hl">React</span> and
                  other awesome technologies.
                </p>
              </m.div>
              <m.div className="about__accent-box about__accent-box--cta">
                <p className="about__text">got interested? check out my projects</p>
                <Link to="/projects">
                  <Button buttonStyle="primarywdot">to projects</Button>
                </Link>
              </m.div>
              <m.div className="about__accent-box about__accent-box--cta">
                <p className="about__text">also feel free to message me!</p>
                <Link to="/contact">
                  <Button buttonStyle="primarywdot">to contacts</Button>
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
