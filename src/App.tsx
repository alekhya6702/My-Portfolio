import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import About from "./pages/About";

import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />

      <Route
        path="/skills"
        element={
          <Layout>
            <Skills />
          </Layout>
        }
      />
      <Route
        path="/Certificates"
        element={
          <Layout>
            <Certificates />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;