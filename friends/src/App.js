import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div>App incoming</div>
      <div>
        <Link to="/">Login</Link>
        <Link to="/friends">Profile</Link>
      </div>
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;
