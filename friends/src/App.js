import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <div>App incoming</div>
      <div>
        <Link className="link" to="/">
          Login
        </Link>
        <Link className="link" to="/friends">
          Friends
        </Link>
      </div>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
