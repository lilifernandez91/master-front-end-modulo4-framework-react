export const fetchGithubMembers = async (orgName: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${orgName}/members`
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
};
