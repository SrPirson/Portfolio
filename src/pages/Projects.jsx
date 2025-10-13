import React from "react";
import SwitchMode from "../components/SwitchTheme";

const Projects = () => {
  return (
    <div className="min-h-screen p-8 transition-colors duration-300 bg-white dark:bg-neutral-900 text-black dark:text-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Prueba tema</h1>
        <p className="mb-4">Haz click en el switch y observa si el fondo/texto cambian.</p>
        <div className="mb-6">
          <SwitchMode />
        </div>
        <div className="p-4 border rounded bg-gray-50 dark:bg-neutral-800">
          Este cuadro también debe cambiar con <code>dark:</code>.
        </div>
      </div>
    </div>
  );
};

export default Projects;
