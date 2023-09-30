function ListOfMovies ({ movies }) {
  return (
    <ul className="movies_container">
      {
        movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.poster} alt={movie.Title} />
            <h5 className="movie_title">{movie.title}</h5>
            <p className="text_small">{movie.year}</p>
          </li>
        ))
      }
    </ul>
  );
}

function NoMoviesResults () {
  return (
    <p>No se encontraron peliculas</p>
  );
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  );
}
