import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import LoadingScreen from "./components/layout/LoadingScreen";
import { features } from "./config/features.js";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-indigo border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => {}} />}
      </AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="experience" element={<Experience />} />
                <Route path="projects" element={<Projects />} />
                <Route path="services" element={<Services />} />
                {features.testimonials && (
                  <Route path="testimonials" element={<Testimonials />} />
                )}
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </HelmetProvider>
  );
}
