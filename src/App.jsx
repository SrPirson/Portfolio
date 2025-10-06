import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { LayoutTextFlip } from "./components/ui/layout-text-flip";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="fixed top-8 left-0 right-0 z-20 px-4 flex items-center">
        {/* Texto animado a la izquierda */}
        <div className="absolute z-10 text-white pl-20 select-none">
          <LayoutTextFlip
            text="Pirson "
            words={["Dev", "Programador", "Desarrollador", "Full Stack"]}
          />
        </div>

        {/* Navbar centrado */}
        <div className="mx-auto relative z-10">
          <Navbar />
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
      <div className="min-h-screen w-full relative bg-black">
        {/* Fondo Violet Storm */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 80%), #000000",
          }}
        />
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
