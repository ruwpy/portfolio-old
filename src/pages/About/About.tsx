import { useIsPresent, motion } from "framer-motion";
import "./About.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Variants } from "framer-motion";
import TransitionScreen from "../../components/TransitionScreen/TransitionScreen";
import WiggleLine from "../../svgs/WiggleLine";
import Button from "../../components/Button/Button";
import MailSvg from "../../svgs/MailSvg";
import { Link } from "react-router-dom";
import BigArrowSvg from "../../svgs/BigArrowSvg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const isPresent = useIsPresent();
  const navigate = useNavigate();

  const boxVariants: Variants = {
    onHover: {
      translateX: "-4px",
      translateY: "-4px",
      boxShadow: "6px 6px 0 0 var(--indigo)",
    },
    initial: {
      translateX: "0px",
      translateY: "0px",
      boxShadow: "0 0 0 0 var(--indigo)",
    },
  };

  return (
    <>
      <main className="main secondary">
        <Navbar isThemeDark />
        <div className="about container">
          <h2 className="about__heading">ABOUT ME</h2>
          <p className="about__text ">
            I’m a 19 year old frontend developer from Siberia. <br /> I’m
            passionate about creating awesome websites with cool designs,
            animations and intuitive, dynamic UX
          </p>
          <div className="about__grid">
            <motion.div
              variants={boxVariants}
              whileHover={"onHover"}
              initial={"initial"}
              className="about__accent-box about__accent-box--first"
            >
              <p className="about__text">
                I started doing all this web stuff in early 2022. something
                dragged me into learning <span className="hl">HTML</span> and{" "}
                <span className="hl">CSS</span>. then, I got really interested
                in web development and started learning{" "}
                <span className="hl">JavaScript</span> and{" "}
                <span className="hl">React</span>.
              </p>
            </motion.div>
            <p className="about__text--looking">
              and now I’m currently looking for a{" "}
              <span className="hl">fulltime remote job</span>
            </p>
            <motion.div
              variants={boxVariants}
              whileHover={"onHover"}
              initial={"initial"}
              className="about__accent-box about__accent-box--second"
            >
              <p className="about__text">
                got interested? feel free to message me
              </p>
              <Link to="mailto:ruwpy.who@gmail.com">
                <Button size="big" style="primary" type="icon">
                  <MailSvg />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="about__cta">
          <div
            onClick={() => navigate("/projects")}
            className="about__cta-content container"
          >
            <Button style="primary" type="icon" size="big">
              <BigArrowSvg />
            </Button>
            <h2 className="link">TAKE A LOOK AT PROJECTS</h2>
          </div>
        </div>
      </main>
      <TransitionScreen isPresent={isPresent} />
    </>
  );
}
