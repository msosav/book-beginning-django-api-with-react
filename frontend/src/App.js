import { Link, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTodo from "./components/add-todo";
import TodosList from "./components/todos-list";
import Login from "./components/login";
import Signup from "./components/signup";

import TodoDataService from "./services/todos";

import { Navbar, Nav } from "react-bootstrap";

function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState("");

  async function login(user = null) {
    TodoDataService.login(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", user.username);
        setError("");
      })
      .catch((error) => {
        console.log("login", error);
        setError(error.toString());
      });
  }

  async function logout() {
    setToken("");
    setUser("");
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
  }

  async function signup(user = null) {
    TodoDataService.signup(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", user.username);
      })
      .catch((e) => {
        console.log(e);
        setError(e.toString());
      });
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
                <Link className="nav-link" onClick={logout}>
                  Logout ({user})
                </Link>
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
          <Route path="/" element={<TodosList token={token} />} />
          <Route path="todos" element={<TodosList token={token} />} />
          <Route path="todos/create" element={<AddTodo token={token} />} />
          <Route path="todos/:id/" element={<AddTodo token={token} />} />
          <Route path="login" element={<Login login={login} />} />
          <Route path="signup" element={<Signup signup={signup} />} />{" "}
        </Routes>
      </div>
    </>
  );
}

export default App;
