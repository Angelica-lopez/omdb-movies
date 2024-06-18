const fetchMovies = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=fd645e05&s=${searchTerm}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export { fetchMovies };
