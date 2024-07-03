import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import FrontPage from "./FrontPage";
function App() {
  return (
    <div className="container">
      <br />
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
