import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.confirmPassword) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      alert("Account Created Successfully, Now Login to access your account");
      navigate("/login");
    }
  };
  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-md my-4 d-flex" style={{height:"480px"}}>
      <div className="col-lg-5 col-md-8 col-sm-10 col-11" style={{ margin: "auto",background:"#9d9dce",border:"1px solid grey", borderRadius:"5px" }}>
        <form
          style={{ border: "1px solid grey", borderRadius: "5px" }}
          className="p-3"
          onSubmit={onSubmit}
        >
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              minLength={8}
              required
              value={credentials.password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label for="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={onChangeHandler}
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
