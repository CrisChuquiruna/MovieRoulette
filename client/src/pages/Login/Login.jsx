import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoggin } from '../../api/user.api.js';
import { useForm } from '../../hook/useForm';
import { UserContext } from '../../context/userState.jsx';

export function Login () {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: ''
  });

  const onLogin = (e) => {
    e.preventDefault();
    userLoggin({ email, password }).then((res) => {
      setUser({
        username: '',
        email,
        logged: true
      });
      navigate('/');
    }).catch((e) => {
      setError(true);
    });
    onResetForm();
  };

  return (
    <main className='container'>
      <form className='card_form' onSubmit={onLogin}>
        <h2 className='card_title'>Login</h2>
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
            required
            autoComplete="off"
          />
        </div>
        {error && <p className='error text_small'>Invalid email or password</p>}
        <button className='btn'>Login</button>
        <a href="/signup" className='text_small'>Not a user? Sign up</a>
      </form>
    </main>
  );
}
