import { MemberDetailApi } from "@/pods/github-list/api/apiModel";

export const getGitHubListData = (
  organization: string
): Promise<MemberDetailApi[]> =>
  fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al obtener datos (${response.status})`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error);
      throw error;
    });
