import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { LoginPage } from "./login";
import { RickAndMorty } from "./rick-and-morty";
import { Inicio } from "./inicio";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list/:orgName" element={<ListPage />} />
        <Route path="/detail/:id/:orgName/:userName" element={<DetailPage />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
};
