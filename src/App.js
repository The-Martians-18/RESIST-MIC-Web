import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MarsExplorer from './pages/marsExplorer';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mars_explorer" element={<MarsExplorer/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
