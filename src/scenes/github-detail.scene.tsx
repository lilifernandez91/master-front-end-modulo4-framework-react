import { GitHubDetailContainer } from "@/pods/github-detail";
import React from "react";
import { useParams } from "react-router-dom";

export const GitHubDetail: React.FC = () => {
  const { organization, memberId } = useParams<{
    organization: string;
    memberId: string;
  }>();

  return (
    <GitHubDetailContainer organization={organization} memberId={memberId} />
  );
};
