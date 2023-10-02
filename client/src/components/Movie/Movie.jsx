import { useState } from 'react';
import { deleteSVG, editSVG } from '../../constants/icons';
import { updateList } from '../../services/movie_list_crud';
import { EditForm } from '../EditForm/EditForm';

export function Movie ({ index, movie_title, movies, setMovies, reloader, list }) {
  const [edit, setEdit] = useState(false);

  const deleteMovie = () => {
    const newMovieList = movies.filter((value) => value !== movie_title);
    setMovies(newMovieList);
    updateList({ list, newMovieList: newMovieList.toString(), reloader });
  };
  const handleClick = () => {
    setEdit(!edit);
  };

  const editName = (newTitle) => {
    setEdit(!edit);
    if (movies[index] === newTitle) return;
    movies[index] = newTitle;
    const newMovieList = movies;

    updateList({ list, newMovieList: newMovieList.toString(), reloader });
  };

  return (
    <>
    <li key={index}>
      <span>- </span>
      {edit
        ? <EditForm setDisplay={setEdit} display={edit} handleClick={editName} placeholder={movie_title}/>
        : <p>{movie_title}</p>}
      <div className='btn_container'>
        <button className='btn_svg' onClick={handleClick}>{editSVG}</button>
        <button className='btn_svg' onClick={deleteMovie}>{deleteSVG}</button>
      </div>
    </li>
    </>
  );
}
