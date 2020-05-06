import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
      const movies = movieData.map(movie => {
      const title = movie.title
      const rating = movie.IMDBRating
      const genres = movie.genres
      const poster = movie.poster
      let newMovie = <MovieCard title={title} poster={poster} genres={genres} IMDBRating={rating} />
      return newMovie
    }) 
    console.log(movies)
    return movies
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
