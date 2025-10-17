import React from "react";
import { Timeline } from "../components/ui/timeline";
import {
  IconBooks,
  IconCertificate,
  IconCode,
} from "@tabler/icons-react";
import Scroll from "/src/components/Scroll";

const About = () => {
  const formacion = [
    {
      title: "2025",
      content: (
        <div className="flex flex-row w-full gap-4 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-lg font-semibold text-subtitle">
              Bootcamp Full Stack Java
            </h2>
            <p className="text-sm font-normal text-text">
              Esplai Formación
            </p>
          </div>
          <div className="flex justify-end">
            <div className="h-32 w-32 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-white/0.1 dark:bg-white backdrop-blur-md">
              <img
                src="/assets/img/logo-FE.png"
                alt="Logo Esplai"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-row w-full gap-4 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-lg font-semibold text-subtitle">
              Técnico Superior en Desarrollo de Aplicaciones Web
            </h2>
            <p className="text-sm font-normal text-text">MEDAC</p>
          </div>
          <div className="flex justify-end">
            <div className="h-32 w-32 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-white/0.1 dark:bg-white backdrop-blur-md">
              <img
                src="/assets/img/logo-Medac.png"
                alt="Logo MEDAC"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div className="flex flex-row w-full gap-4 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-lg font-semibold text-subtitle">
              Técnico en Sistemas Microinformáticos y Redes
            </h2>
            <p className="text-sm font-normal text-text">I.E.S Belén</p>
          </div>
          <div className="flex justify-end">
            <div className="h-32 w-32 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-white/0.1 dark:bg-white backdrop-blur-md">
              <img
                src="/assets/img/logo-Belen.png"
                alt="Logo IES Belén"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="container mx-auto px-4 relative">
      <section className="pt-20 w-full grid grid-cols-1 gap-20 text-center">

        {/* Sección sobre mí */}
        <div className="relative grid grid-cols-2 min-h-screen items-center">
          <div className="flex flex-col justify-center items-center gap-6 px-2 md:px-12 text-center">
            <h1 className="text-4xl font-bold text-title">Sobre Mí</h1>
            <p className="text-sm text-text max-w-md">
              Soy desarrollador web junior, en constante aprendizaje, me desenvuelvo 
              bien en el trabajo en equipo y asumir retos que impulsen el crecimiento
              personal y profesional.
            </p>
            <p className="text-sm text-text max-w-md">
              Destaco por mi liderazgo, adaptabilidad y capacidad para resolver
              problemas de manera creativa y eficiente.
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
            Formación
          </h1>
          <Timeline data={formacion} />
        </section>

        {/* Sección certificados */}
        <section>
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-15 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] select-none">
            <IconCertificate className="w-7 h-7 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
            Certificados
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-15 w-[60%] md:w-[75%] mx-auto">

            <article className="group flex flex-col items-center justify-center bg-violet-200/70 dark:bg-neutral-800/40 rounded-2xl w-auto max-h-[220px] px-3 shadow-[5px_5px_10px_#9b61c2,-5px_-5px_10px_#8d5cad] dark:shadow-[2px_2px_10px_#4f0ca3,-2px_-2px_5px_#6b10dd] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            onClick={() => window.open("/assets/certificados/pdf/certificado_iniciacion_desarrollo_IA.pdf", "_blank")}
            >
              <div className="relative">
                <img
                  src="/assets/certificados/img/certificado_iniciacion_desarrollo_IA.jpg"
                  alt="Curso de Iniciación al Desarrollo con IA"
                  className="w-[200px] object-cover -translate-y-8 shadow-neutral-700/60 dark:shadow-neutral-200/70 shadow-lg rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="-translate-y-5 text-center">
                <h2 className="text-[14px] font-semibold text-subtitle mt-2 pb-1">
                  Curso de Iniciación al Desarrollo con IA
                </h2>
                <p className="text-[11px] font-normal text-text">
                  BIG school - Octubre 2025
                </p>
              </div>
            </article>

            <article className="group flex flex-col items-center justify-center bg-violet-200/70 dark:bg-neutral-800/40 rounded-2xl w-auto max-h-[220px] px-3 shadow-[5px_5px_10px_#9b61c2,-5px_-5px_10px_#8d5cad] dark:shadow-[2px_2px_10px_#4f0ca3,-2px_-2px_5px_#6b10dd] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            onClick={() => window.open("/assets/certificados/pdf/certificado_tailwind_css.pdf", "_blank")}
            >
              <div className="relative">
                <img
                  src="/assets/certificados/img/certificado_tailwind_css.jpg"
                  alt="Tailwind CSS"
                  className="w-[200px] object-cover -translate-y-8 shadow-neutral-700/60 dark:shadow-neutral-200/70 shadow-lg rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="-translate-y-5 text-center">
                <h2 className="text-[14px] font-semibold text-subtitle mt-2 pb-1">
                  Tailwind CSS
                </h2>
                <p className="text-[11px] font-normal text-text">
                  OpenWebinars - Julio 2025
                </p>
              </div>
            </article>

            <article className="group flex flex-col items-center justify-center bg-violet-200/70 dark:bg-neutral-800/40 rounded-2xl w-auto max-h-[220px] px-3 shadow-[5px_5px_10px_#9b61c2,-5px_-5px_10px_#8d5cad] dark:shadow-[2px_2px_10px_#4f0ca3,-2px_-2px_5px_#6b10dd] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            onClick={() => window.open("/assets/certificados/pdf/certificado_creación_y_testing_de_apis_con_node.js_y_express.pdf", "_blank")}
            >
              <div className="relative">
                <img
                  src="/assets/certificados/img/certificado_creación_y_testing_de_apis_con_node.js_y_express.jpg"
                  alt="Certificado Node.js y Express"
                  className="w-[200px] object-cover -translate-y-8 shadow-neutral-700/60 dark:shadow-neutral-200/70 shadow-lg rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="-translate-y-5 text-center">
                <h2 className="text-[14px] font-semibold text-subtitle mt-2 pb-1">
                  Creación y testing de APIs con Node.js y Express
                </h2>
                <p className="text-[11px] font-normal text-text">
                  OpenWebinars - Abril 2025
                </p>
              </div>
            </article>

            <article className="group flex flex-col items-center justify-center bg-violet-200/70 dark:bg-neutral-800/40 rounded-2xl w-auto max-h-[220px] px-3 shadow-[5px_5px_10px_#9b61c2,-5px_-5px_10px_#8d5cad] dark:shadow-[2px_2px_10px_#4f0ca3,-2px_-2px_5px_#6b10dd] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            onClick={() => window.open("/assets/certificados/pdf/certificado_desarrollo_de_aplicaciones_web_con_nodejs_y_express.pdf", "_blank")}
            >
              <div className="relative">
                <img
                  src="/assets/certificados/img/certificado_desarrollo_de_aplicaciones_web_con_nodejs_y_express.jpg"
                  alt="Desarrollo de aplicaciones web con NodeJS y Express"
                  className="w-[200px] object-cover -translate-y-8 shadow-neutral-700/60 dark:shadow-neutral-200/70 shadow-lg rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="-translate-y-5 text-center">
                <h2 className="text-[14px] font-semibold text-subtitle mt-2 pb-1">
                  Desarrollo de aplicaciones web con NodeJS y Express
                </h2>
                <p className="text-[11px] font-normal text-text">
                  OpenWebinars - Marzo 2025
                </p>
              </div>
            </article>

            <article className="group flex flex-col items-center justify-center bg-violet-200/70 dark:bg-neutral-800/40 rounded-2xl w-auto max-h-[220px] px-3 shadow-[5px_5px_10px_#9b61c2,-5px_-5px_10px_#8d5cad] dark:shadow-[2px_2px_10px_#4f0ca3,-2px_-2px_5px_#6b10dd] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            onClick={() => window.open("/assets/certificados/pdf/certificado_fundamentos_de_reactcertificado_fundamentos_de_react.pdf", "_blank")}
            >
              <div className="relative">
                <img
                  src="/assets/certificados/img/certificado_fundamentos_de_react.jpg"
                  alt="Fundamentos de React"
                  className="w-[200px] object-cover -translate-y-8 shadow-neutral-700/60 dark:shadow-neutral-200/70 shadow-lg rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="-translate-y-5 text-center">
                <h2 className="text-[14px] font-semibold text-subtitle mt-2 pb-1">
                  Fundamentos de React
                </h2>
                <p className="text-[11px] font-normal text-text">
                  OpenWebinars - Marzo 2025
                </p>
              </div>
            </article>

            <article className="group flex flex-col items-center justify-center bg-violet-200/70 dark:bg-neutral-800/40 rounded-2xl w-auto max-h-[220px] px-3 shadow-[5px_5px_10px_#9b61c2,-5px_-5px_10px_#8d5cad] dark:shadow-[2px_2px_10px_#4f0ca3,-2px_-2px_5px_#6b10dd] transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            onClick={() => window.open("/assets/certificados/pdf/certificado_curso_de_jquery.pdf", "_blank")}
            >
              <div className="relative">
                <img
                  src="/assets/certificados/img/certificado_curso_de_jquery.jpg"
                  alt="Certificado Node.js y Express"
                  className="w-[200px] object-cover -translate-y-8 shadow-neutral-700/60 dark:shadow-neutral-200/70 shadow-lg rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="-translate-y-5 text-center">
                <h2 className="text-[14px] font-semibold text-subtitle mt-2 pb-1">
                  Curso de jQuery
                </h2>
                <p className="text-[11px] font-normal text-text">
                  OpenWebinars - Enero 2025
                </p>
              </div>
            </article>
          </section>
        </section>

        {/* Sección certificados */}
        <section>
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-15 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] select-none">
            <IconCode className="w-7 h-7 text-title drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
            Certificados
          </h1>
        </section>

      </section>
    </section>
  );
};

export default About;
