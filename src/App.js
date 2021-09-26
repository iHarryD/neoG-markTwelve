import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TriangleQuiz from "./components/TriangleQuiz";
import TriangleOrNot from "./components/TriangleOrNot";
import Hypotenuse from "./components/Hypotenuse";
import AreaOfTriangle from "./components/AreaOfTriangle";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={TriangleQuiz} />
            <Route path="/hypotenuse" component={Hypotenuse} />
            <Route path="/triangleornot" component={TriangleOrNot} />
            <Route path="/areaoftriangle" component={AreaOfTriangle} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
