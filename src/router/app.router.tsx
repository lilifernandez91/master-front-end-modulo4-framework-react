import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "@/router/routes";
import { GithubList, Home, RickAndMorty } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<Home />} />
        <Route path={switchRoutes.githubList} element={<GithubList />} />
        <Route path={switchRoutes.rickAndMorty} element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
};
