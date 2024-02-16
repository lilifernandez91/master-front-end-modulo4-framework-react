import React from "react";
import DetailCardComponent from "@/pods/github-detail/components/detailCard.component";

export const GitHubDetailComponent: React.FC<{
  memberId: string;
}> = ({ memberId }) => {
  return <DetailCardComponent memberId={memberId} />;
};
