import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Index } from "./pages";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

const App = () => {
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <div className="container mt-4">
      <div className="d-flex">
        <Link className="btn btn-info mx-2" to="/">
          Login
        </Link>
        <Link className="btn btn-info mx-2" to="/home">
          Home
        </Link>
        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to="/cart">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
              <span className="visually-hidden">products in cart</span>
            </span>
          </Link>
        </div>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
