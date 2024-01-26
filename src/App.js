// src/App.js
import React from "react";
import "./App.css";
import Testimonials from "./components/Testimonials";
import Team from "./components/Teams";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Cta from "./components/Cta";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />

      <Process />
      <Team />
      <Portfolio />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
