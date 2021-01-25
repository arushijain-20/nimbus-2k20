import React, { useContext, useEffect, useState } from "react";
import "./Main.scss";

import GlobalContext from "../../context/GlobalContext";
import Login from "../LogIn/Login";
import Dashboard from "../Dashboard/Dashboard";
import { CONSTANTS } from "../../config";

export default function Main() {
  const [authToken, setAuthToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState("Club");

  // FUNCTIONS

  // EFFECTS
  useEffect(() => {
    // Get Local Auth Token
    let _authToken = localStorage.getItem("authToken");
    let _refreshToken = localStorage.getItem("refreshToken");
    let _user = JSON.parse(localStorage.getItem("user"));
    let expires = localStorage.getItem("expires");
    if (_authToken && expires > new Date().getTime()) {
      console.log("Got Local Auth Token");
      setAuthToken(_authToken);
      setRefreshToken(_refreshToken);
      setUser(_user);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        authToken,
        setAuthToken,
        refreshToken,
        setRefreshToken,
        user,
        setUser,
      }}
    >
      {!authToken ? <Login /> : <Dashboard />}
    </GlobalContext.Provider>
  );
}
