import React from "react";
import { GitHubListTableComponent } from "./components/table.component";
import { MemberDetail } from "./github-list.vm";
import "./github-list.styles.css";

export const GitHubListComponent: React.FC<{
  organization: string;
  data: MemberDetail[];
}> = ({ organization, data }) => {
  return (
    <div className=" github-list-container">
      <GitHubListTableComponent organization={organization} data={data} />
    </div>
  );
};
