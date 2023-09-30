import { useState } from 'react';
import { PLUS_SVG } from '../../constants/icons';
import { EditForm } from '../EditForm/EditForm';
import { updateList } from '../../services/movie_list_crud';

export function AddMovieForm ({ movies, setMovies, reloader, list }) {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  const addMovie = async (movie_title) => {
    const newMovieList = [...movies, movie_title];
    setMovies(newMovieList);
    updateList({ list, newMovieList: newMovieList.toString(), reloader });
  };

  return (
    <>
    {display
      ? <EditForm setDisplay={setDisplay} display={display} handleClick={addMovie} />
      : <div className='add_container'>
          <button className="btn_svg" onClick={handleClick}>{PLUS_SVG}</button>
        </div>
    }
    </>
  );
}
