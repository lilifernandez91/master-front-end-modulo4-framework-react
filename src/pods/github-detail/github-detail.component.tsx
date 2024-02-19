import React from "react";
import DetailCardComponent from "@/pods/github-detail/components/detailCard.component";
import { MemberDetailApi } from "@/pods/github-detail/api/apiModel";

export const GitHubDetailComponent: React.FC<{
  memberId: string;
  data: MemberDetailApi;
}> = ({ memberId, data }) => {
  return <DetailCardComponent memberId={memberId} data={data} />;
};
