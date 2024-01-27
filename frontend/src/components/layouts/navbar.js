import { Outlet, Link } from "react-router-dom";
import React from "react";

function NavbarLayout() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState("");
  async function login(user = null) {
    // default user to null
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }
  async function signup(user = null) {
    // default user to null
    setUser(user);
  }
  return (
    <>
      <Link class="nav-link" to={"/todos"}>
        Todos
      </Link>
      {user ? (
        <Link class="nav-link">Logout ({user})</Link>
      ) : (
        <>
          <Link class="nav-link" to={"/login"}>
            Login
          </Link>
          <Link class="nav-link" to={"/signup"}>
            Sign Up
          </Link>
        </>
      )}
      <Outlet />
    </>
  );
}

export default NavbarLayout;
