import "./TransitionScreen.scss";

import { motion } from "framer-motion";

export default function TransitionScreen({
  isPresent,
}: {
  isPresent: boolean;
}) {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      exit={{ scaleY: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
      style={{ originY: isPresent ? 1 : 0 }}
      className="transition-screen"
    />
  );
}
