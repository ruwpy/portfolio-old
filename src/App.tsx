import Landing from "./pages/Landing/Landing";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/Projects/Projects";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Landing />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project/:projectName" />
      </Routes>
    </AnimatePresence>
  );
}
