import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div>App incoming</div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
