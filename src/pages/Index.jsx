import { useRef } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { setUser } from "../redux/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.get("http://localhost:3000/users").then((response) => {
      const users = response.data;
      const userToLog = users.find(
        (user) => user.email === emailField.current.value
      );

      if (userToLog) {
        if (userToLog.password === passwordField.current.value) {
          console.log("Contraseña correcta");
          dispatch(
            setUser({
              email: userToLog.email,
              fullName: userToLog.name,
              token: Date.now(),
            })
          );
          navigate("/home");
        }
      }
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h2 className="mb-4">LOGIN FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" ref={emailField} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="text" className="form-control" ref={passwordField} />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
