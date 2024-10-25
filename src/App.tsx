import React from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './constants/routes.tsx';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            {routes.map((route) => <Route
              path={route.path}
              element={route.component} />
            )}
          </Routes>
      </Router>
    </div>
  );
}