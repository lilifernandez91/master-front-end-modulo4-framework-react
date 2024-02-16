import { MemberDetailApi } from "@/pods/github-detail/api/apiModel";

export const getGitHubDetailData = (
  memberId: string
): Promise<MemberDetailApi> =>
  fetch(`https://api.github.com/users/${memberId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener detalles de un miembro (${response.status})`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al obtener detalles de un miembro:", error);
      throw error;
    });
