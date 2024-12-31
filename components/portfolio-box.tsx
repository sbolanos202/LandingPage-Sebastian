import React from "react";
import Image from "next/image";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}
const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { title, image, urlGithub, urlDemo } = data;
  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl h-auto"
      />
      <div className="flex gap-5 mt-5">
        <a
          href={urlGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
        >
          GitHub
        </a>
        <span className="mx-2">|</span>
        <a
          href={urlDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default PortfolioBox;
