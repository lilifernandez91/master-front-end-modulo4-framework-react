import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "@/router/routes";
import { GitHubDetail, GitHubList, Home, RickAndMorty } from "@/scenes";
import { OrganizationComponent } from "@/pods/github-list/components";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<Home />} />
        <Route
          path={`${switchRoutes.githubList}/:organization`}
          element={<GitHubList />}
        />
        <Route
          path={switchRoutes.organization}
          element={<OrganizationComponent />}
        />
        <Route
          path={`${switchRoutes.githubDetail}/:organization/:memberId`}
          element={<GitHubDetail />}
        />
        <Route path={switchRoutes.rickAndMorty} element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
};
