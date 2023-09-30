import { useContext, useEffect } from 'react';
import { UserContext } from '../context/userState';
import { getAllMovieLists } from '../api/movie-list.api';

export const useMovieLists = ({ setLists, reload }) => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    getAllMovieLists()
      .then((res) => {
        const newLists = [];
        res.data.map((list) => {
          if (list.created_by === user.user_id) {
            newLists.push(list);
          }
          return newLists;
        });
        setLists(newLists);
      })
      .catch((e) => {
        setLists([]);
      });
  }, [reload]);
};
