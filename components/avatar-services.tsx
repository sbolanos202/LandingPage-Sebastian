import React from "react";
import MotionTransition from "./transition-component";
import Image from "next/image";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width={300}
        height={300}
        className="w-[350px] h-full"
        alt="Avatar"
      ></Image>
    </MotionTransition>
  );
};

export default AvatarServices;
