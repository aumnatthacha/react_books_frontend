/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Add from './pages/Add';
import Login from './pages/Login/Login';
import Update from './pages/Update';
import AdminRoute from './pages/AdminRoute';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup'
import RequireAuth from './pages/RequireAuth'
import Unauthorized from './pages/Unauthorized';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update/:id" element={<AdminRoute><Update /></AdminRoute>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/requireAuth" element={<RequireAuth />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
