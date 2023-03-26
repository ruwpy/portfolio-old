import "./TransitionScreen.scss";

import { motion as m } from "framer-motion";

export default function TransitionScreen({
  isPresent,
}: {
  isPresent: boolean;
}) {
  return (
    <m.div
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      exit={{ scaleY: 1, transition: { duration: 0.4, ease: "easeOut" } }}
      style={{ originY: isPresent ? 1 : 0 }}
      className="transition-screen"
    />
  );
}
