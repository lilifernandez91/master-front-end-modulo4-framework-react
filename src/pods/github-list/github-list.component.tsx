import React from "react";
import { GitHubListTableComponent } from "@/pods/github-list/components/table.component";

export const GitHubListComponent: React.FC<{
  organization: string;
}> = ({ organization }) => {
  return <GitHubListTableComponent organization={organization} />;
};
