import "./Heading.scss";
import { AnimatePresence, motion as m, Variants } from "framer-motion";

const headingVariants: Variants = {
  initial: {
    x: 75,
    rotate: 50,
    opacity: 0,
  },
  animate: (custom) => ({
    transition: { delay: custom * 0.07 },
    x: 0,
    rotate: 0,
    opacity: 1,
  }),
};

export default function Heading({
  children,
  isDark,
}: {
  children: string;
  isDark?: boolean;
}) {
  const headingText = children.split("");

  return (
    <AnimatePresence mode="wait">
      <m.h2 key="header " className={`heading ${isDark && "dark"}`}>
        {headingText.map((letter, index) => {
          return (
            <m.span variants={headingVariants} custom={index} key={index}>
              {letter}
            </m.span>
          );
        })}
      </m.h2>
    </AnimatePresence>
  );
}
