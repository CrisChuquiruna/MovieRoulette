import { useContext, useEffect } from 'react';
import { getUser } from '../api/user.api';
import { UserContext } from '../context/userState';

export const useUpdateUserState = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    getUser()
      .then((res) => {
        const newUser = {
          user_id: res.data.user.user_id,
          username: res.data.user.username,
          email: res.data.user.email,
          logged: true
        };
        setUser(newUser);
      })
      .catch((e) => {
        const newUser = {
          user_id: '',
          username: '',
          email: '',
          logged: false
        };
        setUser(newUser);
      });
  }, [user.logged]);
};
