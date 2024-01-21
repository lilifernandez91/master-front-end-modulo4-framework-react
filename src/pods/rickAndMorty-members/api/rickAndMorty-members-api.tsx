export const fetchRickAndMortyData = async () => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
};
