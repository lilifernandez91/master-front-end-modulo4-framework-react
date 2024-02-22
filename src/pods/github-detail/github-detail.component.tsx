import React from "react";
import DetailCardComponent from "@/pods/github-detail/components/detailCard.component";
import { MemberDetailApi } from "@/pods/github-detail/api/apiModel";

export const GitHubDetailComponent: React.FC<{
  memberId: string;
  data: MemberDetailApi;
  organization: string;
}> = ({ memberId, data, organization }) => {
  return (
    <DetailCardComponent
      memberId={memberId}
      data={data}
      organization={organization}
    />
  );
};
