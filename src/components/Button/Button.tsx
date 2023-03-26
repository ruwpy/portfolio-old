import { ReactNode } from "react";
import "./Button.scss";
import { motion as m, Variants } from "framer-motion";
import { ArrowSvg } from "../Svgs";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  type?: "text" | "icon";
  buttonStyle: "primarywdot" | "secondarywdot";
  fullWidth?: boolean;
  size?: "big" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  type,
  children,
  size,
  fullWidth,
  buttonStyle,
  onClick,
}: ButtonProps) {
  const buttonVariants: Variants = {};

  return (
    <m.button
      transition={{ type: "spring", duration: 0.15 }}
      variants={buttonVariants}
      onClick={onClick}
      className={`button ${type} ${size} ${buttonStyle} ${fullWidth && "w100"}`}
    >
      {children}
      <ArrowSvg />
    </m.button>
  );
}
