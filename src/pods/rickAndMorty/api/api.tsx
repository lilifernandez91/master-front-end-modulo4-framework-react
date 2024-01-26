import { MemberDetailApi } from "@/pods/rickAndMorty/api/apiModel";

export const getRickAndMortyData = (): Promise<MemberDetailApi[]> =>
  fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener datos de personajes (${response.status})`
        );
      }
      return response.json();
    })
    .then((data) => data.results)
    .catch((error) => {
      console.error("Error al obtener datos de personajes:", error);
      throw error;
    });
