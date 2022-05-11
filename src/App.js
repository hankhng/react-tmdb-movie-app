import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const MOVIE_API = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchkey] = useState("");
  const [favouriteMovie, setFavouriteMovie] = useState([])

  const fetchMovies = async (searchKey) => {
    const searchType = searchKey ? "search" : "discover"
    const { data: { results } } = await axios.get(`${MOVIE_API}/${searchType}/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        query: searchKey
      }
    })

    setMovies(results);
  }

  useEffect(() => {
    fetchMovies(searchKey);
  }
    , [searchKey]);

  const renderMovies = () => (
    movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        onClick={() => setFavouriteMovie((state) => [...state, movie])} // ...state -> state holds the current state and ...state is spread operator  + movie
      />
    ))
  )

  const renderFavourites = () => (
    favouriteMovie.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        onClick={() => setFavouriteMovie((state) => state.filter(m => m.id !== movie.id)) }
      />
    ))
  )

  console.log(favouriteMovie);

  // const searchMovies = (e) => {
  //   e.preventDefault()
  //   fetchMovies(searchKey)
  // }

  return (
    <div className="App">
      <header className={"header"}>
        <div className={"header-content max-center"}>
          <h1 onClick={() => setSearchkey("")}>Movie App</h1>
          {/* Add link tag to go home */}
          <form>
            <input type="text" onChange={(e) => setSearchkey(e.target.value)} value={searchKey} />
            <button type={"submit"}>Search</button>
          </form>
        </div>
      </header>

      <div className={"header-content max-center"}>
        <h2>Favourites</h2>
      </div>
      <div className="container max-center">
        {renderFavourites()}
      </div>

      <div className={"header-content max-center"}>
        <h2>Discover the latest movies</h2>
      </div>
      <div className="container max-center">
        {renderMovies()}
      </div>


    </div>
  );
}

export default App;
