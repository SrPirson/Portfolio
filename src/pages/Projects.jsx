import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useTranslation } from "react-i18next";
import { IconCode, IconPlug } from "@tabler/icons-react";

const Projects = () => {
  const { t } = useTranslation("global");
  const projects = t("projects.project", { returnObjects: true }) || [];
  const plugins = t("projects.plugins", { returnObjects: true }) || [];

  return (
    <section className="container mx-auto px-4 py-32 min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-title mb-4 flex items-center gap-4">
          <IconCode className="w-10 h-10 md:w-14 md:h-14 text-violet-500" />
          {t("navbar.projects")}
        </h1>
        <div className="h-1.5 w-24 bg-violet-500 rounded-full mb-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-32 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-title mb-4 flex items-center gap-4">
          <IconPlug className="w-9 h-9 md:w-12 md:h-12 text-violet-500" />
          {t("projects.plugins-title")}
        </h2>
        <div className="h-1.5 w-24 bg-violet-500 rounded-full mb-6"></div>
        <p className="text-text max-w-xl">{t("projects.plugins-subtitle")}</p>
      </div>

      {/* 2 columnas centradas: con 3 quedaba un hueco vacío a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 lg:mx-auto">
        {plugins.map((plugin) => (
          <div key={plugin.title} className="flex">
            <ProjectCard {...plugin} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;