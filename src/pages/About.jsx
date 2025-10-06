import React from "react";
import { Timeline } from "../components/ui/timeline";

const About = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div className="grid grid-cols-3 w-full gap-4 items-center">
          <div>
          <h2 className="text-2xl text-violet-200">Fundación Esplai</h2>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Bootcamp Full Stack Java
          </p>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="h-50 w-full md:h-60 lg:h-50 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              <img
                src="/assets/img/logo-FE.png"
                alt="Logo Fundación Esplai"
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
        <div className="grid grid-cols-3 w-full gap-4 items-center">
          <div>
            <h2 className="text-2xl text-violet-200">MEDAC</h2>
            <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
              Técnico Superior en Desarrollo de Aplicaciones Web (DAW)
            </p>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="h-50 w-full md:h-60 lg:h-50 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              <img
                src="/assets/img/logo-FE.png"
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
        <div className="grid grid-cols-3 w-full gap-4 items-center">
          <div>
          <h2 className="text-2xl text-violet-200">I.E.S Belén</h2>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Técnico en Sistemas Microinformáticos y Redes (SMR)
          </p>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="h-50 w-full md:h-60 lg:h-50 rounded-lg overflow-hidden drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              <img
                src="/assets/img/logo-FE.png"
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
      <section className="pt-40 w-full grid grid-cols-1 gap-10 text-center">
        <div className="relative">
          <h1 className="text-4xl font-bold text-violet-400 mb-6">Sobre Mí</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-12">
            Soy un desarrollador web apasionado por la tecnología, el diseño y
            la innovación. A lo largo de los años he trabajado en proyectos
            personales y colaborativos, buscando siempre un equilibrio entre
            estética, rendimiento y funcionalidad.
          </p>
        </div>

        <div className="relative w-full overflow-visible pb-500">
          <Timeline data={data} />
        </div>
      </section>
    </div>
  );
};

export default About;
