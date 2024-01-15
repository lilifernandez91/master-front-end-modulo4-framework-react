import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pods/github-members/github-members.component";
import { RickAndMorty } from "../pods/rickAndMorty-members/rickAndMorty-members.component";
import { ListPage } from "../pods/github-members/github-members.container";
import { DetailPage } from "../pods/github-members/github-members-details";
import { Inicio } from "../home/home-page";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/github-members" element={<LoginPage />} />
        <Route path="/github-members-list/:orgName" element={<ListPage />} />
        <Route
          path="/github-members-details/:id/:orgName/:userName"
          element={<DetailPage />}
        />
        <Route path="/rick-and-morty-members" element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
};
