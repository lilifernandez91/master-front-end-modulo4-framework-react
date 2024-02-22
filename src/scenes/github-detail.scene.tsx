import { GitHubDetailContainer } from "@/pods/github-detail";
import React from "react";
import { useParams } from "react-router-dom";

export const GitHubDetail: React.FC = () => {
  const { memberId, organization } = useParams<{
    memberId: string;
    organization: string;
  }>();

  return (
    <GitHubDetailContainer memberId={memberId} organization={organization} />
  );
};
