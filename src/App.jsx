import { useEffect, useState } from "react";
import StringCleaner from "./components/StringCleaner";
import { fetchMovies } from "./services/api";
import Card from "./components/Card";
import LoadingState from "./assets/images/loading-state.png";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieSearchTerm, setMovieSearchTerm] = useState("end");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);

      try {
        const fetchedData = await fetchMovies(movieSearchTerm);
        setMovies(fetchedData.Search);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getMovies();
  }, [movieSearchTerm]);

  return (
    <div>
      <header className='px-5 bg-white py-5'>
        <h1 className='text-[#6FBED6] text-3xl'>Movies app</h1>
      </header>
      <div className='flex flex-col gap-24 mt-7'>
        <StringCleaner />

        <div className='mx-auto w-full max-w-[1000px]'>
          <div className='mb-4 w-full'>
            <input
              type='text'
              id='stringInput'
              value={inputValue}
              className='border-2 border-grey-500 px-2 rounded-md'
              onChange={handleInputChange}
            />
            <button
              onClick={() => setMovieSearchTerm(inputValue)}
              className='bg-[#6FBED6] border-2 border-white text-white ml-2 py-[2px] rounded-md text-sm px-2'
            >
              Search
            </button>
          </div>
          {loading ? (
            <img
              src={LoadingState}
              alt='Loading image'
              className='animate-spin w-[50px] h-[50px]'
            />
          ) : (
            <>
              {!movies?.length ? (
                <h1 className='text-md text-white font-medium text-center my-12'>
                  Oops! No movies found. Try a different search.
                </h1>
              ) : (
                <div class='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6 '>
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
              )}
            </>
          )}
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
