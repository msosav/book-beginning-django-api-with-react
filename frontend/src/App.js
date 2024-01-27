import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTodo from "./components/add-todo";
import TodosList from "./components/todos-list";
import Login from "./components/login";
import Signup from "./components/signup";
import NavbarLayout from "./components/layouts/navbar.js";

import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>TodosApp</Navbar.Brand>
          <Container>
            <Nav className="me-auto">
              <Routes>
                <Route path="/" element={<NavbarLayout />}>
                  <Route path="todos" element={<TodosList />} />
                  <Route path="add-todo" element={<AddTodo />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                </Route>
              </Routes>
            </Nav>
          </Container>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
