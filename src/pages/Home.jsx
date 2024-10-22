import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <CTA />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
