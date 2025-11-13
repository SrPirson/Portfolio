import React from "react";
import { Timeline } from "../components/ui/timeline";
import {
  IconBooks,
  IconCertificate,
  IconCode,
} from "@tabler/icons-react";
import Scroll from "/src/components/Scroll";

import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");
  const [showAll, setShowAll] = React.useState(false);

  const formacion = t("about.education", { returnObjects: true }).map((item) => ({
    title: item.year,
    content: (
      <div className="flex flex-row w-full gap-4 items-center">
        <div className="flex-1 text-left">
          <h2 className="text-lg font-semibold text-subtitle">{item.title}</h2>
          <p className="text-sm font-normal text-text">{item.school}</p>
        </div>
        <div className="flex justify-end">
          <div className="h-32 w-32 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-white/0.1 dark:bg-white backdrop-blur-md">
            <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    ),
  }));

  const certificates = t("about.certificates", { returnObjects: true });
  const visibleCerts = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section className="container mx-auto px-4 relative">
      <section className="pt-20 w-full grid grid-cols-1 gap-20 text-center">

        {/* Sección sobre mí */}
        <div className="relative grid grid-cols-2 min-h-screen items-center">
          <div className="flex flex-col justify-center items-center gap-6 px-2 md:px-12 text-center">
            <h1 className="text-4xl font-bold text-title">{t("about.title")}</h1>
            <p className="text-sm text-text max-w-md">
              {t("about.description_1")}
            </p>
            <p className="text-sm text-text max-w-md">
              {t("about.description_2")}
            </p>
          </div>

          <div className="flex justify-center md:justify-end pr-0 md:pr-12">
            <img
              src="/assets/img/me-left.png"
              alt="Foto personal"
              className="p-1 w-50 md:w-80 h-auto rounded-full select-none pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-white/0.1 backdrop-blur-md border border-black/30 dark:border-white/20"
            />
          </div>
          <Scroll />
        </div>
        
        {/* Sección formación */}
        <section className="relative w-full">
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-8 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] select-none">
            <IconBooks className="w-7 h-7 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
            {t("about.sections.education")}
          </h1>
          <Timeline data={formacion} />
        </section>

        {/* Sección certificados */}
        <section>
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-15 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] select-none">
            <IconCertificate className="w-7 h-7 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
            {t("about.sections.certificates")}
          </h1>

          <div className="flex justify-center">
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-15 w-[90%] md:w-[75%] mx-auto transition-all duration-500">
              {visibleCerts.map((cert, index) => (
                <article
                  key={index}
                  className="group flex flex-col items-center justify-center bg-violet-200/70 dark:bg-neutral-800/40 rounded-2xl w-auto max-h-[220px] px-3 shadow-[5px_5px_10px_#9b61c2,-5px_-5px_10px_#8d5cad] dark:shadow-[2px_2px_10px_#4f0ca3,-2px_-2px_5px_#6b10dd] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                  onClick={() =>
                    window.open(
                      `/assets/certificados/pdf/${cert.src.split("/").pop().replace(".jpg", ".pdf")}`,
                      "_blank"
                    )
                  }
                >
                  <div className="relative">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="w-[200px] object-cover -translate-y-8 shadow-neutral-700/60 dark:shadow-neutral-200/70 shadow-lg rounded-lg transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="-translate-y-5 text-center">
                    <h2 className="text-[14px] font-semibold text-subtitle mt-2 pb-1">
                      {cert.title}
                    </h2>
                    <p className="text-[11px] font-normal text-text">
                      {cert.school} - {cert.date}
                    </p>
                  </div>
                </article>
              ))}
            </section>
          </div>

          {certificates.length > 6 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {showAll ? t("about.button_certificates_less") || "Ver menos" : t("about.button_certificates_more") || "Ver más"}
              </button>
            </div>
          )}
        </section>

        {/* Sección habilidades */}
        <section>
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-15 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] select-none">
            <IconCode className="w-7 h-7 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
            {t("about.sections.skills")}
          </h1>
          <article>
            {/* Contenido de habilidades */}
          </article>
        </section>

      </section>
    </section>
  );
};

export default About;
