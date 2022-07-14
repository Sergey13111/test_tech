import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Header } from './components/header';
import Routers from "./components/Routers";
import { fetchAuthMe, selectIsAuth } from './store/auth/authSlice'

function App() {
  // const isAuth = true
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      {/* <header className="App-header">
        {isAuth ? 
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="SignUp">SignUp</NavLink>
          <NavLink to="Login">Login</NavLink>
          <NavLink to="Companies">Companies</NavLink>
          <NavLink to="Profile">Profile</NavLink>
        </nav> :
        
        <nav>
          <NavLink to="/">Home page</NavLink>
          <NavLink to="SignUp">SignUp</NavLink>
          <NavLink to="Login">Login</NavLink>
        </nav>
        }
      </header> */}

      <Header />

      <Routers />
      
    </>
   
  );
}

export default App;




