import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <div className="app">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/services" exact component={Services} />
            <Route path="/Works" exact component={Works} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
