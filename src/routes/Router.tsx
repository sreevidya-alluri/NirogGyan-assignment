import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DoctorList from "../components/DoctorList";
import DoctorProfile from "../components/DoctorProfile";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DoctorList />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
