import React from "react";
import { Timeline } from "../components/ui/timeline";
import { IconBooks, IconCertificate, IconCode } from "@tabler/icons-react";
import Scroll from "/src/components/Scroll";

import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");
  const [showAll, setShowAll] = React.useState(false);

  const formacion = t("about.education", { returnObjects: true }).map(
    (item) => ({
      title: item.year,
      content: (
        <div className="flex flex-row w-full gap-4 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-lg font-semibold text-subtitle">
              {item.title}
            </h2>
            <p className="text-sm font-normal text-text">{item.school}</p>
          </div>
          <div className="flex justify-end">
            <div className="h-32 w-32 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-white/0.1 dark:bg-white backdrop-blur-md">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    }),
  );

  const certificates = t("about.certificates", { returnObjects: true });
  const visibleCerts = showAll ? certificates : certificates.slice(0, 6);

  const skills = t("about.skills", { returnObjects: true });

  const SkillCard = ({ name, src }) => (
    <div className="flex flex-col items-center group p-2 rounded-xl transition-all">
      <div className="w-12 h-12 flex items-center justify-center p-1 bg-white/5 dark:bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg">
        <img
          src={src}
          alt={name}
          className="w-10 h-10 object-contain transition-all group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
        />
      </div>
      <span className="text-[10px] md:text-xs mt-2 font-medium text-text text-center opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {name}
      </span>
    </div>
  );

  const SkillWindow = ({ title, items }) => (
    <div className="flex flex-col bg-violet-100/30 dark:bg-neutral-900/40 rounded-xl overflow-hidden border border-violet-300/30 dark:border-white/10 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-violet-400/50 h-full">
      <div className="flex items-center justify-between px-4 py-2 bg-violet-200/50 dark:bg-neutral-800/60 border-b border-violet-300/30 dark:border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-[0_0_5px_rgba(248,113,113,0.5)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 shadow-[0_0_5px_rgba(74,222,128,0.5)]"></div>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-subtitle opacity-70">
          {title}
        </span>
        <div className="w-10"></div>
      </div>
      <div className="p-4 flex flex-wrap items-center justify-center gap-4">
        {items.map((item) => (
          <SkillCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 relative">
      <section className="pt-20 w-full grid grid-cols-1 gap-20 text-center">
        {/* Sección sobre mí */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen items-center py-10">
          <div className="flex flex-col justify-center items-center md:items-start gap-6 px-2 md:px-12 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-title">
              {t("about.title")}
            </h1>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-text max-w-xl leading-relaxed">
                {t("about.description_1")}
              </p>
              <p className="text-base md:text-lg text-text max-w-xl leading-relaxed">
                {t("about.description_2")}
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end pr-0 md:pr-12 order-1 md:order-2 mb-10 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/assets/img/me-left.png"
                alt="Foto personal"
                className="relative p-1 w-48 md:w-80 h-auto rounded-full select-none pointer-events-none drop-shadow-2xl bg-white/0.1 backdrop-blur-md border border-white/20"
              />
            </div>
          </div>
          <Scroll />
        </div>

        {/* Sección formación */}
        <section className="relative w-full">
          <h1 className="text-3xl md:text-4xl flex items-center justify-center gap-2 mb-8 text-title font-bold">
            <IconBooks className="w-8 h-8 text-violet-500" />
            {t("about.sections.education")}
          </h1>
          <Timeline data={formacion} />
        </section>

        {/* Sección certificados */}
        <section className="py-10">
          <h1 className="text-3xl md:text-4xl flex items-center justify-center gap-2 mb-16 text-title font-bold">
            <IconCertificate className="w-8 h-8 text-violet-500" />
            {t("about.sections.certificates")}
          </h1>

          <div className="flex justify-center">
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20 w-[95%] md:w-full mx-auto">
              {visibleCerts.map((cert, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col items-center justify-center bg-violet-100/20 dark:bg-neutral-800/40 rounded-3xl p-6 transition-all duration-500 hover:bg-violet-100/40 dark:hover:bg-neutral-800/60 border border-transparent hover:border-violet-500/30 cursor-pointer"
                  onClick={() =>
                    window.open(
                      `/assets/certificados/pdf/${cert.src.split("/").pop().replace(".jpg", ".pdf")}`,
                      "_blank",
                    )
                  }
                >
                  <div className="absolute -top-6 transition-all duration-500 group-hover:-top-8 group-hover:scale-105">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="w-48 md:w-56 object-cover shadow-2xl rounded-xl border-4 border-white dark:border-neutral-700"
                    />
                  </div>
                  <div className="mt-40 text-center">
                    <h2 className="text-base font-bold text-subtitle mb-2">
                      {cert.title}
                    </h2>
                    <p className="text-sm font-medium text-text/80">
                      {cert.school}
                    </p>
                    <p className="text-xs font-normal text-text/60 mt-1">
                      {cert.date}
                    </p>
                  </div>
                </article>
              ))}
            </section>
          </div>

          {certificates.length > 6 && (
            <div className="flex justify-center mt-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-violet-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 hover:bg-violet-700"
              >
                {showAll
                  ? t("about.button_certificates_less") || "Ver menos"
                  : t("about.button_certificates_more") || "Ver más"}
              </button>
            </div>
          )}
        </section>

        {/* Sección habilidades */}
        <section className="py-20">
          <h1 className="text-3xl md:text-4xl flex items-center justify-center gap-3 mb-16 text-title font-bold">
            <IconCode className="w-8 h-8 text-violet-500" />
            {t("about.sections.skills")}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {skills.map((category) => (
              <div key={category.category} className="space-y-6">
                <h2 className="text-2xl font-bold text-subtitle text-left ml-4 border-l-4 border-violet-500 pl-4">
                  {category.category}
                </h2>
                <div className="flex flex-col gap-5 pb-1">
                  {category.subcategories.map((sub) => (
                    <SkillWindow
                      key={sub.title}
                      title={sub.title}
                      items={sub.items}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
