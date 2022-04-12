import React from "react";
import { Route, Routes } from "react-router-dom";
import { FormInputPage } from "./pages/FormInputPage";
import { AuthPage } from "./pages/AuthPage";
import { AllImgPage } from "./pages/AllImgPage";
import { LastImgPage } from "./pages/LastImgPage";

export const useRouter = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<FormInputPage />} exact />
        <Route path="/image" element={<AllImgPage />} exact />
        <Route path="/last" element={<LastImgPage />} exact />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} exact />
    </Routes>
  );
};





