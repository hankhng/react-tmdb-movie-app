import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const MOVIE_API = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data: {results} } = await axios.get(`${MOVIE_API}/discover/movie`, {
      params: {
        api_key: "7d4270b1c65d636e4008c412ac43bdaf" // can't get process.env.TMDB_API_KEY to work
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

  return (
    <div className="App">
      <h1>React Movie App</h1>
      <div className="container">
      {renderMovies()}
      </div>
    </div>
  );
}

export default App;
