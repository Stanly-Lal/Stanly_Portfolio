import React from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx"
import projectapi from "./api/projectapi";
import ContactMe from "./components/ContactMe.jsx";
import MoveToTop from "./components/MoveToTop.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Skills />
      <Projects api={projectapi} />
      <ContactMe />
      <MoveToTop />
      <Footer />
    </>
  );
};

export default App;
