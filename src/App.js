import React from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
      <Router>
          <div className="app">
              <Switch>

                  <Route path="/projects">
                      <Project/>
                  </Route>

                  <Route path="/resume">
                      <Resume/>
                  </Route>

                  <Route path="/contact">
                        <Header/>
                        <Contact/>
                        <Footer/>
                  </Route>

                  <Route path="/">
                      <Home/>
                  </Route>

              </Switch>
          </div>
      </Router>

  );
}

export default App;
