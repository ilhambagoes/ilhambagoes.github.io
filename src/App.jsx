// File: src/App.jsx
import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;