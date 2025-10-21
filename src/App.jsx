import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { LayoutTextFlip } from "./components/ui/layout-text-flip";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LangSwitcher from "./components/LangSwitcher";

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  in: { opacity: 1, y: 0, filter: "blur(0px)" },
  out: { opacity: 0, y: -20, filter: "blur(8px)" },
};

const pageTransition = {
  type: "spring",
  stiffness: 80,
  damping: 25,
  duration: 0.1,
};

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-8 left-0 right-0 z-20 px-8 flex items-center justify-between">
        {/* Texto animado a la izquierda */}
        <div className="text-violet-600 dark:text-violet-50 select-none">
          <LayoutTextFlip
            text="Pirson "
            words={["Dev", "Programador", "Desarrollador", "Full Stack"]}
          />
        </div>

        {/*
          const { t } = useTranslation();
          <LayoutTextFlip
            text={t("app.brand_name")}
            words={t("app.animated_titles", { returnObjects: true })}
          />
        */}

        {/* Navbar centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <Navbar />
        </div>

        {/* Botón de tema a la derecha */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>


      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-0 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            className="min-h-screen"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full relative bg-bg transition-colors duration-500">
        {/* Fondo Violet Storm */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background: "var(--color-bg-gradient)",
          }}
        />
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
