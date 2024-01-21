import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RickAndMorty } from "../../scenes/rickAndMorty-members.scene";
import { GithubMembersList } from "../../scenes/github-members.list.scene";
import { GithubMembersDetails } from "../../scenes/github-members-details.scene";
import { Home } from "../../scenes/home.scene";
import { GithubMembers } from "../../scenes/github-members.scene";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github-members" element={<GithubMembers />} />
        <Route
          path="/github-members-list/:orgName"
          element={<GithubMembersList />}
        />
        <Route
          path="/github-members-details/:id/:orgName/:userName"
          element={<GithubMembersDetails />}
        />
        <Route path="/rick-and-morty-members" element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
};
