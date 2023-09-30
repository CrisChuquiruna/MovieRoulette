import { useState } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';
import './MyLists.css';
import CreateListForm from '../../components/CreateListForm/CreateListForm';
import { svgPlus } from '../../constants/icons';
import { useMovieLists } from '../../hook/useLists';

export function MyLists () {
  const [display, setDisplay] = useState(false);
  const [lists, setLists] = useState([]);
  const [reload, setReload] = useState(false);

  const handleClick = () => {
    const newDisplay = !display;
    setDisplay(newDisplay);
  };
  const reloader = () => {
    setReload(!reload);
  };

  useMovieLists({ setLists, reload });

  return (
    <>
    <h1>MyLists</h1>
    <ul className='movieLists'>
      {
        lists.map(list => (
        <MovieList
        list={list}
        key={list.id}
        reloader={reloader}
        />
        ))
      }
    <button className='btn_svg' onClick={handleClick}>{svgPlus}</button>
    </ul>
    {display && <CreateListForm handleClick={handleClick} reloader={reloader} />}
    </>
  );
}
