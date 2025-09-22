import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <About />
        <Contact />
      </main>
    </>
  );
}
