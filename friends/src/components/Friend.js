import React from "react";
import "../index.css";

const Friend = props => {
  console.log("Friend props", props);
  return (
    <div className="friend-card">
      <div>Name: {props.friend.name}</div>
      <div>Email: {props.friend.email}</div>
    </div>
  );
};

export default Friend;
