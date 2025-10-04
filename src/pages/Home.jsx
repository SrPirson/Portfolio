import React, { useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileCv,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

// Datos de redes sociales
const socialLinks = [
  { title: "GitHub", icon: <IconBrandGithub />, href: "https://github.com/srpirson" },
  { title: "LinkedIn", icon: <IconBrandLinkedin />, href: "https://www.linkedin.com/in/franciscocortespirson/" },
  { title: "Email", icon: <IconMail />, href: "mailto:tuemail@ejemplo.com" },
  { title: "Descargar CV", icon: <IconFileCv />, href: "src/assets/CV/CV-FranciscoCortesPirson.pdf", download: true },
];

// Componente para cada icono con tooltip debajo
const SocialIcon = ({ title, icon, href, download }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      download={download}
      target={!download ? "_blank" : undefined}
      rel={!download ? "noopener noreferrer" : undefined}
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icono con animación */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 rounded-4xl border-2 border-gray-700 bg-black text-gray-400 hover:text-violet-400 transition-colors duration-500"
      >
        {icon}
      </motion.div>

      {/* Tooltip debajo */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white shadow-md whitespace-nowrap"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

const Home = () => {
  return (
    <div className="container">
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center px-4">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="src/assets/me-avatar.png"
            alt="Me"
            className="w-64 h-auto rounded-lg select-none pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          />
        </div>

        {/* Texto y redes */}
        <div className="flex flex-col items-center text-center px-4">
          <section className="mb-6">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Francisco Cortés Pirson
            </h1>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-violet-400 font-extrabold">&lt;<span className="ml-1">&gt;</span></span>{" "}
              <span className="text-violet-200">Programador Web Full Stack</span>{" "}
              <span className="text-violet-400 font-extrabold">&lt;<span className="mr-1 pl-1">/</span>&gt;</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-md mx-auto">
              Siempre explorando nuevas tecnologías y buenas prácticas para
              transformar ideas en soluciones web completas, funcionales y de
              alto rendimiento.
            </p>
          </section>

          {/* Iconos Sociales con efecto FloatingDock */}
          <section className="flex gap-6 mt-4">
            {socialLinks.map((link) => (
              <SocialIcon key={link.title} {...link} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
