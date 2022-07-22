import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unsetUser } from "../redux/reducers/user/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };

  return (
    <>
      <h2>Home</h2>
      <p>¡Hola {user.fullName}!</p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
      <hr />
    </>
  );
};
