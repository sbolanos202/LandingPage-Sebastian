"use client";

import { itemsNavbar } from "@/data";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router && pathname === item.link && "bg-secondary"
              }`}
              data-tooltip-target="tooltip-default"
              onClick={() => handleNavigation(item.link)} // Uso de handleNavigation
            >
              {item.icon}
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
