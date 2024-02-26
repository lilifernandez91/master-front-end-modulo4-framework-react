import React, { useEffect, useState } from "react";
import { GitHubListComponent } from "./github-list.component";
import { getGitHubListData } from "./api";
import { mapMemberListFromApiToVm } from "./github-list.mappers";

export const GitHubListContainer: React.FC<{
  organization: string;
}> = ({ organization }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getGitHubListData(organization)
      .then((responseData) => {
        setData(mapMemberListFromApiToVm(responseData));
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [organization]);

  return <GitHubListComponent organization={organization} data={data} />;
};
