import { GitHubListContainer } from "@/pods";
import React from "react";
import { useParams } from "react-router-dom";

export const GitHubList: React.FC = () => {
  const { organization } = useParams<{
    organization: string;
  }>();

  return <GitHubListContainer organization={organization} />;
};
