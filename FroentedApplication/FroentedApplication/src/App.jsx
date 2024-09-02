// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home"; // Ensure this component exists and is correctly imported
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/list" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
