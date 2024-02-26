import React from "react";
import DetailCardComponent from "./components/detailCard.component";
import { MemberDetail } from "./github-detail.vm";
import "./github-detail.styles.css";

export const GitHubDetailComponent: React.FC<{
  memberId: string;
  data: MemberDetail;
  organization: string;
}> = ({ memberId, data, organization }) => {
  return (
    <div className="github-detail-container">
      <DetailCardComponent
        memberId={memberId}
        data={data}
        organization={organization}
      />
    </div>
  );
};
