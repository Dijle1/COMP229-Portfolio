import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import Layout from "./components/Layout";

import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Project from "./project";
import Services from "./services";
import Signin from "./signin";  
import Signup from "./signup";  
import Admin from "./pages/Admin"; 
import AdminProjects from "./pages/AdminProjects";
import AdminQualifications from "./pages/AdminQualifications";
import AdminContacts from "./pages/AdminContacts";


const MainRouter = () => {
  return (
    <div>
      <Layout /> {}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/qualifications" element={<AdminQualifications />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />




        {/* Auth Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
