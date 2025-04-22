import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./containers/overview";
import BookForm from "./containers/book-form";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/form" element={<BookForm />} />
      <Route path="/form/:id" element={<BookForm />} />
    </Routes>
  );
};
