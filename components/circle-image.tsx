"use client";

import React from "react";
import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image
        src="/circles.png"
        width={390}
        height={390}
        className="w-full h-full"
        alt="Avatar"
      ></Image>
    </div>
  );
};

export default CircleImage;
