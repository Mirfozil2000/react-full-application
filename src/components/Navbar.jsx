import React from "react";
import { logo } from "../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  console.log(isLoggedIn);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={"/"}>
        <img src={logo} width={100} alt="" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {isLoggedIn ? (
          <>
          <p className="me-3 m-0 py-2 text-dark text-decoration-none">
            {user.username}
          </p>
          <button className="btn btn-outline-danger">logout</button>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="me-3 py-2 link-body-emphasis text-decoration-none"
              href="#"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="me-3 py-2 link-body-emphasis text-decoration-none"
              href="#"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
