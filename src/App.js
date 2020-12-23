import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="app">
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/about">
              <h1>THIS IS EMAIL</h1>
            </Route>
            <Route path="/users">
              <h1>This is user</h1>
            </Route>
            <Route path="/">
              <h2>This is home</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
