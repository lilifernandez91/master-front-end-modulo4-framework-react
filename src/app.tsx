import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { LoginPage } from "./login";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list/:orgName" element={<ListPage />} />
        <Route path="/detail/:id/:orgName/:userName" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
