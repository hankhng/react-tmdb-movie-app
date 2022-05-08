import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const MOVIE_API = "https://api.themoviedb.org/3/"

  const fetchMovies = async () => {
    const data = await axios.get(`${MOVIE_API}`)
  }

  useEffect(() => {}
  , []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
