import React from "react";
import Contact from "./components/Contact";
import "./app.css";
import ContactEmail from "./components/ContactEmail";

function App() {
  return (
    <div className="app">
      <ContactEmail />
      <Contact />
    </div>
  );
}

export default App;
