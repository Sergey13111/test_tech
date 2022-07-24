import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Header } from './components/header';
import Routers from "./components/Routers";
import { fetchAuthMe } from './store/auth/authSlice'

function App() {
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  },[dispatch]);

  return (
    <>
      <Header />
      <Routers />
    </>
  );
}

export default App;




