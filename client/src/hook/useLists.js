import { useContext, useEffect } from 'react';
import { UserContext } from '../context/userState';
import { getMovieList } from '../api/movie-list.api';

export const useMovieLists = ({ setLists, reload }) => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    getMovieList(user.user_id).then((res) => {
      setLists(res.data);
    }).catch((e) => {
      setLists([]);
    });
  }, [reload]);
};
