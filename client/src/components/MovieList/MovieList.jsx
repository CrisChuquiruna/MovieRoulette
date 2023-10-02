import { useEffect, useState } from 'react';
import { IconShare, arrowSVG, deleteSVG, editSVG, getSVG } from '../../constants/icons';
import { Movie, AddMovieForm } from '../index';
import { EditForm } from '../EditForm/EditForm';
import { deleteList, updateList } from '../../services/movie_list_crud';

export function MovieList ({ list, reloader }) {
  const [display, setDisplay] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState();

  const handleClick = () => {
    const newDisplay = !display;
    setDisplay(newDisplay);
  };

  const getRandom = () => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setRandomMovie(randomMovie);
  };

  const deleteClick = () => {
    deleteList({ id: list.id, reloader });
  };
  // CRUD para modificar la movieList

  const editTitle = (newTitle) => {
    updateList({ list, newTitle, reloader });
  };

  const shareList = (newSharedUsers) => {
    updateList({ list, newSharedUsers, reloader });
  };

  const displayMenuClick = () => {
    setDisplayForm(!displayForm);
  };

  //  moviesList es un string con las películas separadas por comas, esto lo convierte en array
  useEffect(() => {
    if (list.movies_list) {
      const moviesArray = list.movies_list.split(',');
      setMovies(moviesArray);
    }
    if (list.moviesList === '') {
      setMovies([]);
    }
  }, []);

  return (
    <>
    <li key={list.id} className='list_container'>

      {displayForm
        ? <EditForm setDisplay={setDisplayForm} display={displayForm} handleClick={editTitle} placeholder={list.title} />
        : <h5 className="list_title">{list.title}</h5>}

      <div className='buttons_container'>
        <button className="btn_svg" onClick={deleteClick}>{deleteSVG}</button>
        <button className="btn_svg" onClick={shareList}>{IconShare}</button>
        <button className='btn_svg' onClick={displayMenuClick}>{editSVG}</button>
        <button className="btn_svg" onClick={handleClick}>{arrowSVG}</button>
      </div>
    </li>

    { display &&
      <section className='movie_list_container'>
        <div className='random_container'>
          <button className="btn_svg" onClick={getRandom}>{getSVG}</button>
          {randomMovie ? <p>{randomMovie}</p> : <p className='text_small'>{'Get random movie'}</p>}
        </div>
        <div className='container_flex'>
          <AddMovieForm movies={movies} setMovies={setMovies} reloader={reloader} list={list} />
        </div>
        <ul className='list'>
          {movies.map((movie_title, index) => (
            <Movie key={index} index={index} movie_title={movie_title} movies={movies} setMovies={setMovies} reloader={reloader} list={list} />
          ))}
        </ul>
      </section>}
    </>
  );
}
