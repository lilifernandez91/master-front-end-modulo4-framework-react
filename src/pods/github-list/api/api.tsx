import { GitHubUserApi } from "@/pods/github-list/api/apiModel";

export const getGithubData = (
  organizationName: string
): Promise<GitHubUserApi[]> =>
  fetch(`https://api.github.com/orgs/${organizationName}/members`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener datos de miembros (${response.status})`
        );
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(
        `Error al obtener datos de miembros de la organización ${organizationName}:`,
        error
      );
      throw error;
    });
