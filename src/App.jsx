import { useEffect, useState } from "react";
import StringCleaner from "./components/StringCleaner";
import { fetchMovies } from "./services/api";
import Card from "./components/Card";

const App = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const fetchedData = await fetchMovies("end");
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
        <div class='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-24 mx-auto'>
          {movies?.map(({ Title, Year, Poster, Type, imdbID }) => (
            <Card
              title={Title}
              image={Poster}
              year={Year}
              type={Type}
              key={imdbID}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
