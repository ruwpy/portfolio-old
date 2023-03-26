import {
  AnimatePresence,
  motion as m,
  useIsPresent,
  useSpring,
  useScroll,
} from "framer-motion";
import "./Projects.scss";
import Navbar from "../../components/Navbar/Navbar";
import TransitionScreen from "../../components/TransitionScreen/TransitionScreen";
import { useEffect } from "react";
import Project, { ProjectProps } from "../../components/Project/Project";
import { ParallaxText } from "../../components/ParallaxScroll/ParallaxScroll";
import projectsData from "../../data/projects";

export default function Projects() {
  const isPresent = useIsPresent();
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, { stiffness: 300 });

  useEffect(() => {
    document.addEventListener("scroll", () => console.log("a"));

    return () => document.removeEventListener("scroll", () => console.log(y));
  }, []);

  return (
    <>
      <AnimatePresence>
        <Navbar />
        <m.main
          key="projects-page"
          animate="animate"
          initial="initial"
          className="main primary"
        >
          <div className="projects container">
            <div className="projects__list">
              {projectsData.map((project: ProjectProps) => {
                const {
                  barCode,
                  brailleName,
                  endYear,
                  image,
                  name,
                  qrCode,
                  codeLink,
                  demoLink,
                } = project;
                return (
                  <Project
                    barCode={barCode}
                    brailleName={brailleName}
                    endYear={endYear}
                    image={image}
                    name={name}
                    qrCode={qrCode}
                    codeLink={codeLink}
                    demoLink={demoLink}
                  />
                );
              })}
            </div>
          </div>
          <div className="projects__stripe">
            <ParallaxText baseVelocity={5}>ruwpy</ParallaxText>
            <ParallaxText baseVelocity={-5}>projects</ParallaxText>
          </div>
        </m.main>
      </AnimatePresence>
      <TransitionScreen isPresent={isPresent} />
    </>
  );
}
