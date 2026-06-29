import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable scroll-reveal wrapper.
 * Fades + slides children into view the first time they enter the viewport.
 *
 * Props:
 *  - direction: "up" | "down" | "left" | "right" | "none"
 *  - delay, duration: numbers (seconds)
 *  - once: animate only once (default true)
 *  - amount: how much of the element must be visible to trigger (0-1)
 *  - as: render a different motion element ("div" | "section" | "li" ...)
 */
const offsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
