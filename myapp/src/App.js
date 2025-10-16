import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function Courses() {
  return <h2>Explore Our Courses</h2>;
}

function Contact() {
  return <h2>Contact Us Here</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <h1>My React Website</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/courses">Courses</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;