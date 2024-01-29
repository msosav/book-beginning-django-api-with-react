import { Link, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTodo from "../add-todo";
import TodosList from "../todos-list";
import Login from "../login.js";
import Signup from "../signup";

import { Navbar, Nav } from "react-bootstrap";

function NavbarLayout() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState("");

  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }
  async function signup(user = null) {
    setUser(user);
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>TodosApp</Navbar.Brand>
          <Nav className="me-auto">
            <>
              <Link className="nav-link" to={"/todos"}>
                Todos
              </Link>
              {user ? (
                <Link className="nav-link">Logout ({user})</Link>
              ) : (
                <>
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                  <Link className="nav-link" to={"/signup"}>
                    Sign Up
                  </Link>
                </>
              )}
            </>
          </Nav>
        </div>
      </Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/">
            <Route path="todos" element={<TodosList token={token} />} />
            <Route path="todos/create" element={<AddTodo token={token} />} />
            <Route path="todos/:id/" element={<AddTodo token={token} />} />
            <Route path="login" element={<Login login={login} />} />
            <Route path="signup" element={<Signup signup={signup} />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default NavbarLayout;
