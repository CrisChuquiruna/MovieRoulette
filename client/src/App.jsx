import './Reset.css';
import './App.css';
import AppRouter from './router/AppRouter';
import { useUpdateUserState } from './hook/useUpdateUserState';

function App () {
  useUpdateUserState();
  return (
   <>
    <AppRouter/>
   </>
  );
}

export default App;
