import React, { useEffect, useState } from "react";
import "@/pods/github-list/github-list.styles.css";
import { GitHubListComponent } from "@/pods/github-list/github-list.component";
import { getGitHubListData } from "@/pods/github-list/api/api";

export const GitHubListContainer: React.FC<{
  organization: string;
}> = ({ organization }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getGitHubListData(organization)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [organization]);

  return (
    <div className="github-list-container">
      <GitHubListComponent organization={organization} data={data} />
    </div>
  );
};
