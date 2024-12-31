"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion-transition";

interface MotionTransitionProps {
  children: React.ReactNode;
  position: "right" | "bottom";
  className?: string;
}

const MotionTransition = (props: MotionTransitionProps) => {
  const { children, position, className } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 1, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
