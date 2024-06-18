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
        <div class='rounded bg-white flex flex-col p-3 gap-3 w-full max-w-[1000px] m-auto'>
          <div className='flex gap-3'>
            <div className='w-full bg-[#6FBED6] text-white font-bold rounded h-[70px] flex items-center justify-center'>
              Caja 1
            </div>
            <div className='w-full bg-[#6FBED6] text-white font-bold rounded h-[70px] flex items-center justify-center'>
              Caja 2
            </div>
            <div className='w-full bg-[#6FBED6] text-white font-bold rounded h-[70px] flex items-center justify-center'>
              Caja 3
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='w-full bg-[#6FBED6] text-white font-bold rounded h-[70px] flex items-center justify-center'>
              Caja 4
            </div>
            <div className='w-full bg-[#6FBED6] text-white font-bold rounded h-[70px] flex items-center justify-center'>
              Caja 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
