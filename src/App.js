import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './components/Project'
import Technologies from './components/Technologies';
import './App.css';
import Employee from './components/Employee';
import Login from './components/Login';
import Signup from './components/Signup';
import Mentordata from './components/Mentordata';
import Mentordashboard from './components/Mentordashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/project" element={<Project />} />
          <Route path="/technologies" element={<Technologies/>} />
          <Route path="/mentordata" element={<Mentordata/>} />
          <Route path="/mentordashboard/:id" element={<Mentordashboard/>}/>
          <Route path="/employee" element={<Employee/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
