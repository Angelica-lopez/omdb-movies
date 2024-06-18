import { useEffect, useState } from "react";
import StringCleaner from "./components/StringCleaner";
import { fetchMovies } from "./services/api";

const App = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const fetchedData = await fetchMovies("bale");
        setMovies(fetchedData.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <header className='px-5 bg-white py-5'>
        <h1 className='text-[#6FBED6] text-3xl'>Movies app</h1>
      </header>
      <div className='flex flex-col gap-24 mt-7'>
        <StringCleaner />
      </div>
    </div>
  );
};

export default App;
