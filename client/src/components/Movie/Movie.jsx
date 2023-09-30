import { useState } from 'react';
import { deleteSVG, editSVG, sendSVG } from '../../constants/icons';
import { useForm } from '../../hook/useForm';
import './Movie.css';
import { updateList } from '../../services/movie_list_crud';

export function Movie ({ index, movie_title, movies, setMovies, reloader, list }) {
  const [title, setTitle] = useState(movie_title);
  const [edit, setEdit] = useState(false);
  const { newTitle, onInputChange, onResetForm } = useForm({
    newTitle: movie_title
  });

  const deleteMovie = () => {
    const newMovieList = movies.filter((value) => value !== movie_title);
    setMovies(newMovieList);
    updateList({ newMovieList: newMovieList.toString() });
  };
  const handleClick = () => {
    setEdit(!edit);
  };

  const editName = (e) => {
    e.preventDefault();
    setEdit(!edit);
    if (movies[index] === newTitle) return;

    movies[index] = newTitle;
    const newMovieList = movies;
    setTitle(newTitle);
    updateList({ list, newMovieList: newMovieList.toString(), reloader });

    onResetForm();
  };

  return (
    <>
    <li key={index}>
      <span>- </span>
      {edit
        ? <form action="" className='edit_form' onSubmit={editName}>
            <div className='form_input'>
              <input
                type='text'
                name='newTitle'
                placeholder={movie_title}
                value={newTitle}
                onChange={onInputChange}
              />
              <button className='btn_svg'>{sendSVG}</button>
            </div>
          </form>
        : <p>{title}</p>}
      <div className='btn_container'>
        <button className='btn_svg' onClick={handleClick}>{editSVG}</button>
        <button className='btn_svg' onClick={deleteMovie}>{deleteSVG}</button>
      </div>
    </li>
    </>
  );
}
