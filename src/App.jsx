import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import History from "./History";
import Api from "./Api";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home": return <Home />;
      case "about": return <About />;
      case "services": return <Services />;
      case "contact": return <Contact />;
      case "history": return <History />;
      case "api": return <Api />;
      default: return <Home />;
    }
  };

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;
