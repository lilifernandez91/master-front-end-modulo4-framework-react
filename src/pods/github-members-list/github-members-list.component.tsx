import React from "react";
import { GithubMembersListVolverComponent } from "./components/github-members-list-volver.component";
import { GithubMembersListTableComponent } from "./components/github-members-list-table.component";
import "./github-members-list.styles.css";

export const GithubMembersListComponent: React.FC = () => {
  return (
    <div className="table-content">
      <GithubMembersListVolverComponent />
      <GithubMembersListTableComponent />
    </div>
  );
};
