import React from "react";
import { Timeline } from "../components/ui/timeline";
import { IconBooks } from "@tabler/icons-react";
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
            <p className="text-sm font-normal text-neutral-300">Esplai Formación</p>
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
    <div className="container mx-auto px-4 text-white relative">
      <section className="pt-20 w-full grid grid-cols-1 gap-10 text-center">
        {/* Sección sobre mi */}
        <div className="relative grid grid-cols-2 h-screen">
          <div className="pt-50">
            <div>
              <h1 className="text-4xl font-bold text-violet-200">Sobre Mí</h1>
            </div>
            <div className="pt-10">
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Soy desarrollador web, motivado por el aprendizaje continuo, el
                trabajo en equipo y asumir retos que impulsen el crecimiento
                personal y profesional.
              </p>
              <p className="text-sm text-gray-300 max-w-md mx-auto pt-4">
                Destaco por mi liderazgo, adaptabilidad y capacidad para resolver
                problemas de manera creativa y eficiente.
              </p>
            </div>
          </div>

          <div className="pt-20 pl-30 items-center">
            <img
              src="assets/img/me-left.png"
              alt="Me photo"
              className="p-1 w-80 h-auto bg-neutral-950 rounded-full select-none pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] border border-fuchsia-950"
            />
          </div>

          <Scroll />
        </div>

        {/* Sección de formación */}
        <div className="relative w-full">
          <h1 className="text-3xl flex items-center justify-center gap-2 mb-8">
            <IconBooks className="w-7 h-7" />
            Formación
          </h1>
          <Timeline data={data} />
        </div>
      </section>
    </div>
  );
};

export default About;