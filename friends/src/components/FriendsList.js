import React, { useEffect, useState } from "react";
import axios from "axios";

const FriendsList = ({ history }) => {
  const [friends, setFriends] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5000/api/friends";

    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: `${token}`
          }
        })
        .then(response => {
          console.log("GET response", response);
          // setFriends(response.data);
        })
        .catch(error => {
          console.log("GET error", error);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, [history]);

  return (
    <div>
      <div>Friends list incoming </div>
    </div>
  );
};

export default FriendsList;
