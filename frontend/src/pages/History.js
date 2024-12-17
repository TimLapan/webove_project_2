import React from "react";
import Navbar from "../components/History_components/Navbar";
import Intro from "../components/History_components/Intro";
import Section1 from "../components/History_components/Section1";
import Section2 from "../components/History_components/Section2";
import Section3 from "../components/History_components/Section3";
import Section4 from "../components/History_components/Section4";
import Section5 from "../components/History_components/Section5";
import Section6 from "../components/History_components/Section6";
import "../components/History_components/Section.css"
import "../components/History_components/Intro.css"
import Footer from "../components/HomePage_components/Footer";
function History() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default History;
