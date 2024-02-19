import React from "react";
import { GitHubListTableComponent } from "@/pods/github-list/components/table.component";
import { MemberDetailApi } from "@/pods/github-list/api/apiModel";

export const GitHubListComponent: React.FC<{
  organization: string;
  data: MemberDetailApi[];
}> = ({ organization, data }) => {
  return <GitHubListTableComponent organization={organization} data={data} />;
};
