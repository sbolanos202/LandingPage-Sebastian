import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <ContainerPage>
        <TransitionPage />
        <AvatarPortfolio />
        <CircleImage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> trabajos.</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Estos son algunos de mis proyectos personales y de trabajo. Cada uno
            de ellos ha sido un desafío que me ha permitido aprender y mejorar
            en diversas áreas.
          </p>
          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </>
  );
};

export default Portfolio;
