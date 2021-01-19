import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import { CONSTANTS } from "../../config";

export default function Login() {
  const { setAuthToken, authToken, setRefreshToken, setUser } = useContext(
    GlobalContext
  );

  // FORM
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleChange = (e) => {
    if (e.target) setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      let response = await fetch(
        CONSTANTS.BASE_URL + "departments/auth/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      let data = await response.json();
      setLoading(false);
      if (response.status !== 200) {
        setError(data);
        return;
      }
      if (data.access) {
        let _user = { name: data.name, image: data.image };
        setAuthToken(data.access);
        setRefreshToken(data.refresh);
        setUser(_user);
        localStorage.setItem("authToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("user", JSON.stringify(_user));
        localStorage.setItem(
          "expires",
          new Date().getTime() + 23 * 3600 * 1000
        );
      }
    } catch (err) {
      console.log("Error Getting Auth Token - Err : ", err.message);
      setLoading(false);
      setError({ detail: "Network Error" });
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Nimbus</h1>
      </div>
      <div className="container">
        <div className="login">
          <div className="info info-2">Nimbus Events</div>
          <div className="info">Create Read Update Delete</div>
          <div className="form-container">
            <div className="heading">
              <h1>Admin</h1>
              <h3>NIMBUS Clubs and Event Managers</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    required
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="username"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    required
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="********"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-row">
                {error ? <div className="error">{error.detail}</div> : null}
              </div>
              {loading ? (
                <div className="form-control">
                  <div class="progress-horizontal">
                    <div class="bar-horizontal"></div>
                  </div>
                </div>
              ) : null}
              <div className="form-row">
                <button type="submit" className="btn-submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
