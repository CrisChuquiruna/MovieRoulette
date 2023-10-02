import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userState';
import { svgAvatar } from '../../constants/icons';
import { userLogout } from '../../api/user.api';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

export function Navbar () {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [navMenu, setNavMenu] = useState(false);

  const handleClick = () => {
    const newNavMenu = !navMenu;
    setNavMenu(newNavMenu);
  };

  const onLogout = (e) => {
    e.preventDefault();
    userLogout().then((res) => {
      setUser({
        username: '',
        email: '',
        logged: false
      });
      setNavMenu(false);
      navigate('/login');
    });
  };

  return (
    <>
    <header className='container nav-header'>
      <nav className='nav'>
        <ul className=''>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user.logged
            ? (<>
              <li>
                <Link to="/MyLists">My Lists</Link>
              </li>
              <li>
                <button className='icon-btn' onClick={handleClick}>{svgAvatar}</button>
              </li>
              </>)
            : (<>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              </>)
          }
        </ul>
      </nav>
    </header>
    <main className='container'>
      <DropdownMenu displayMenu={navMenu}>
        <header>
          <p>{user.username}</p>
          <p className='text_small'>id:{user.user_id}</p>
        </header>
        <li><button onClick={onLogout}>Logout</button></li>
      </DropdownMenu>
      <Outlet/>
    </main>
    </>
  );
}
