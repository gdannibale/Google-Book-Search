
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/index";
import Form from "../src/components/form/index";
import Header from "../src/components/header/header";
import container from "../src/pages/container";
import myBooks from "../src/pages/myBooks";
function App() {
  return (
    <Router>
    <div>
      <Navbar />
    <Route exact path="/" component={container} />
    <Route exact path="/saved" component={myBooks} />

    </div>
    </Router>
  );
}

export default App;
