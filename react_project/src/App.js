import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import About from "./components/About";
import Header from "./components/Header";
import Create from "./components/Create";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note" element={<Note />} />
          <Route path="/note/:noteURL" element={<Note />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
