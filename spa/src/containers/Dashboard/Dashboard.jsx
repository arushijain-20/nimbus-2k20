import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import "./Dashboard.scss";

export default function Dashboard() {
  const { user } = useContext(GlobalContext);
  return (
    <div className="main dashboard">
      <div className="heading">
        <h1>{user?.name}</h1>
        <img src={user.image} alt="avatar" className="avatar" />
      </div>
      <div className="container">Hello</div>
    </div>
  );
}
