import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { LayoutTextFlip } from "./components/ui/layout-text-flip";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-8 left-0 right-0 z-20 px-4 flex items-center">
        {/* Texto animado a la izquierda */}
        <div className="absolute left-4 text-white pl-20 select-none">
          <LayoutTextFlip
            text="Pirson "
            words={["Dev", "Programador", "Desarrollador", "Full Stack"]}
          />
        </div>

        {/* Navbar centrado */}
        <div className="mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Contenido de las páginas con fade */}
      <div className="container mx-auto px-4">
        <div className="relative z-10 pt-5 p-8 text-white">
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={400}
          >
            <div className="absolute inset-0">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full fixed bg-black">
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
