import React from "react";
import About from "./components/About";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Discover />
      <Services />
      <SignUp />
    </>
  );
};

export default App;
