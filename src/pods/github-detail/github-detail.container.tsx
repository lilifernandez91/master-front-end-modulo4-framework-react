import React, { useEffect, useState } from "react";
import "@/pods/github-detail/github-detail.styles.css";
import { GitHubDetailComponent } from "@/pods/github-detail/github-detail.component";
import { getGitHubDetailData } from "@/pods/github-detail/api/api";

export const GitHubDetailContainer: React.FC<{
  memberId: string;
  organization: string;
}> = ({ memberId, organization }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getGitHubDetailData(memberId)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener detalles de un miembro:", error);
      });
  }, [memberId]);

  return (
    <div className="github-detail-container">
      <GitHubDetailComponent
        memberId={memberId}
        data={data}
        organization={organization}
      />
    </div>
  );
};
