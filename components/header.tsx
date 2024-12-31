import React from "react";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <a href="">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Sebastian
              <span className="text-secondary"> Bolanos</span>
            </h1>
          </a>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <a
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </a>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
