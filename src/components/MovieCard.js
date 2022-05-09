import React from 'react'

const MovieCard = ({ movie }) => {
  console.log("movie object", movie);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

  return (
    <div className={'movie-card'}>
      {movie.poster_path ? <img className={"movie-cover"} src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
        :
        <div className={"movie-placeholder"}>No image found</div>
      }

      <h4 className={"movie-title"}>{movie.title} ({movie.vote_average})</h4>
      <h5>{movie.overview}</h5>
      <h5>Released: {movie.release_date}</h5>
    </div>
  )
}

export default MovieCard;