import React, { useEffect, useState } from "react";
import { GithubListTableComponent } from "@/pods/github-list/components/";
import { GitHubUserApi, getGithubData } from "./api";

export const GithubListComponent: React.FC<{
  orgOrganization: string | null;
}> = ({ orgOrganization }) => {
  const [data, setData] = useState<GitHubUserApi[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const githubData = await getGithubData(orgOrganization);
        setData(githubData);
      } catch (error) {
        console.error("Error fetching Github data:", error);
      }
    };

    fetchData();
  }, []);

  return <GithubListTableComponent data={data} />;
};
