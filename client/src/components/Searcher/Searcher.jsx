import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';
import { useMovies, useSearch } from '../../hook/index';
import { Movies } from '../Movies/Movies';
import './Searcher.css';

export default function Searcher () {
  const svgSearch = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="icon icon-search"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>;
  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search });
    }, 500)
    , [getMovies]
  );

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <>
    <header className='searcher'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input_container'>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, Star Wars, The Matrix ...'
          />
          <button type='submit'>{svgSearch}</button>
        </div>
        <input
          type="checkbox"
          onChange={handleSort}
          checked={sort}
        />
      </form>
      {error && <p className='error text_small'>{error}</p>}
    </header>
    <div className='container'>
    {
      loading ? <p>Cargando ...</p> : <Movies movies={movies} />
    }
    </div>
    </>
  );
}
