import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import {
  Home,
  MyLists,
  Login,
  Signup
} from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { UnloggedRoute } from './UnloggedRoute';

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="myLists" element={
            <PrivateRoute>
              <MyLists />
            </PrivateRoute>
          } />
          <Route path="login" element={
            <UnloggedRoute>
              <Login />
            </UnloggedRoute>
        } />
          <Route path="signup" element={
            <UnloggedRoute>
              <Signup />
            </UnloggedRoute>
          } />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
