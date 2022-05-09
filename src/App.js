import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const MOVIE_API = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchkey] = useState([], "");

  const fetchMovies = async (searchKey) => {
    const searchType = searchKey ? "search" : "discover"
    const { data: { results } } = await axios.get(`${MOVIE_API}/${searchType}/movie`, {
      params: {
        api_key: "7d4270b1c65d636e4008c412ac43bdaf",
        // api_key: process.env.TMDB_API_KEY, 
        // can't get process.env to work
        query: searchKey
      }
    })

    setMovies(results);
  }

  useEffect(() => {
    fetchMovies();
  }
    , []);

  const renderMovies = () => (
    movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))
  )

  const searchMovies = (e) => {
    e.preventDefault()
    fetchMovies(searchKey)
  }

  return (
    <div className="App">
      <header className={"header"}>
        <div className={"header-content max-center"}>
          <h1>Movie App</h1>
          {/* Add link tag to go home */}
          <form onSubmit={searchMovies}>
            <input type="text" onChange={(e) => setSearchkey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        </div>
      </header>
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
