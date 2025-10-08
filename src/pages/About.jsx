import React from "react";
import { Timeline } from "../components/ui/timeline";
import {
  IconBooks,
  IconCertificate,
} from "@tabler/icons-react";
import Scroll from "/src/components/Scroll";

const About = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-row w-full gap-4 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-lg font-semibold text-violet-200">
              Bootcamp Full Stack Java
            </h2>
            <p className="text-sm font-normal text-neutral-300">
              Esplai Formación
            </p>
          </div>
          <div className="flex justify-end">
            <div className="h-32 w-32 rounded-lg overflow-hidden shadow-lg bg-violet-100">
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
            <h2 className="text-lg font-semibold text-violet-200">
              Técnico Superior en Desarrollo de Aplicaciones Web
            </h2>
            <p className="text-sm font-normal text-neutral-300">MEDAC</p>
          </div>
          <div className="flex justify-end">
            <div className="h-32 w-32 rounded-lg overflow-hidden shadow-lg bg-violet-100">
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
            <h2 className="text-lg font-semibold text-violet-200">
              Técnico en Sistemas Microinformáticos y Redes
            </h2>
            <p className="text-sm font-normal text-neutral-300">I.E.S Belén</p>
          </div>
          <div className="flex justify-end">
            <div className="h-32 w-32 rounded-lg overflow-hidden shadow-lg bg-violet-100">
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
    <section className="container mx-auto px-4 text-white relative">
      <section className="pt-20 w-full grid grid-cols-1 gap-20 text-center">

        {/* Sección sobre mí */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
          <div className="flex flex-col justify-center items-center gap-6 px-6 md:px-12 text-center">
            <h1 className="text-4xl font-bold text-violet-200">Sobre Mí</h1>
            <p className="text-sm text-gray-300 max-w-md">
              Soy desarrollador web, motivado por el aprendizaje continuo, el
              trabajo en equipo y asumir retos que impulsen el crecimiento
              personal y profesional.
            </p>
            <p className="text-sm text-gray-300 max-w-md">
              Destaco por mi liderazgo, adaptabilidad y capacidad para resolver
              problemas de manera creativa y eficiente.
            </p>
          </div>

          <div className="flex justify-center md:justify-end pr-0 md:pr-12">
            <img
              src="/assets/img/me-left.png"
              alt="Foto personal"
              className="p-1 w-80 h-auto bg-neutral-950 rounded-full select-none pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] border border-fuchsia-950"
            />
          </div>
        </div>

        <Scroll />

        {/* Sección formación */}
        <section className="relative w-full">
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-8">
            <IconBooks className="w-7 h-7" />
            Formación
          </h1>
          <Timeline data={data} />
        </section>

        {/* Sección certificados */}
        <section>
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-8">
            <IconCertificate className="w-7 h-7" />
            Certificados
          </h1>
          <div>
            
          </div>
        </section>

      </section>
    </section>
  );
};

export default About;
