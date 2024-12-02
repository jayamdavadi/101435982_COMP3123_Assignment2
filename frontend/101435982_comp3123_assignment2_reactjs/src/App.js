import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import AppRoutes from "./routes/AppRoutes";

// Import global CSS file
import './global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
