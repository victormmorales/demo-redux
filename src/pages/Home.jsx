import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unsetUser } from "../redux/reducers/user/userSlice";
import { ProductList } from "../components/ProductList";
import Axios from "axios";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <h2>Home</h2>
      <p>¡Hola {user.fullName}!</p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
      <hr />

      <ProductList products={products} />
    </>
  );
};
