import { ReactNode } from "react";
import "./Button.scss";
import { motion, Variants } from "framer-motion";
import ArrowSvg from "../../svgs/ArrowSvg";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  type?: "text" | "icon";
  direction?: "left" | "right" | "bottom";
  style: "primary" | "secondary" | "ternary";
  isArrow?: boolean;
  size?: "big" | "small";
}

export default function Button({
  className,
  type,
  children,
  size,
  isArrow,
  direction,
  style,
  ...props
}: ButtonProps) {
  const buttonVariants: Variants = {
    onHover: {
      translateX: "-4px",
      translateY: "-4px",
      boxShadow:
        style === "primary"
          ? "6px 6px 0 0 var(--indigo)"
          : "6px 6px 0 0 var(--indigo)",
    },
    initial: {
      translateX: "0px",
      translateY: "0px",
      boxShadow:
        style === "primary" ? "0 0 0 0 var(--indigo)" : "0 0 0 0 var(--indigo)",
    },
  };

  return (
    <motion.button
      transition={{ type: "spring", duration: 0.15 }}
      variants={buttonVariants}
      whileHover={"onHover"}
      initial={"initial"}
      whileTap={"initial"}
      className={`button ${type} ${type !== "icon" && "text"} ${size} ${style}`}
      {...props}
    >
      {type === "icon" && isArrow ? (
        <ArrowSvg direction={direction} iconStyle={style} />
      ) : (
        children
      )}
    </motion.button>
  );
}
