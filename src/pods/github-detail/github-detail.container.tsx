import React, { useEffect, useState } from "react";
import { GitHubDetailComponent } from "./github-detail.component";
import { getGitHubDetailData } from "./api";
import { mapMemberListFromApiToVm } from "./github-detail.mappers";

export const GitHubDetailContainer: React.FC<{
  memberId: string;
  organization: string;
}> = ({ memberId, organization }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getGitHubDetailData(memberId)
      .then((responseData) => {
        setData(mapMemberListFromApiToVm(responseData));
      })
      .catch((error) => {
        console.error("Error al obtener detalles de un miembro:", error);
      });
  }, [memberId]);

  return (
    <GitHubDetailComponent
      memberId={memberId}
      data={data}
      organization={organization}
    />
  );
};
