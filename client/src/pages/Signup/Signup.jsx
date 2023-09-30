import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { useForm } from '../../hook/useForm.js';
import { userLoggin, userSignup } from '../../api/user.api.js';
import { UserContext } from '../../context/userState.jsx';

export function Signup () {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });

  function onSignup (e) {
    e.preventDefault();
    userSignup({ email, username, password }).then((res) => {
      //  once registered you log in
      userLoggin({ email, password }).then(function (res) {
        setUser({
          username,
          email,
          logged: true
        });
        navigate('/myLists');
      }).catch((e) => {
        setUser({
          username: '',
          email: '',
          logged: false
        });
      });
    }).catch((e) => {
      setError(true);
    });
    onResetForm();
  }

  return (
    <main className='container'>
      <form className='card_form' onSubmit={onSignup}>
        <h2 className='card_title'>Sign up</h2>

        <div className='form_input'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
        </div>
        <div className='form_input'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@mail.com"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
        </div>
        <div className='form_input'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onInputChange}
            pattern='^.{8,}$' title='Must contain at least 8 or more characters'
            required
            autoComplete="off"
          />
        </div>
        {error && <p className='error text_small'>The email has already been taken</p>}
        <button className='btn'>Sign up</button>
        <a href="/login" className='text_small'>Already a user? Sign in</a>
      </form>
    </main>
  );
}
