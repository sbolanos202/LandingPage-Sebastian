export const transitionVariantsPage = {
  initial: {
    opacity: 0,
    x: "100%",
    width: "100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    width: "0%",
  },
  exit: {
    opacity: 0,
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const fadeIn = (position: string) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? -80 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
};
