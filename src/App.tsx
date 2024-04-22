import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store/store';
import Layout from './layout/default/layout';
import GaragePage from './pages/garage/garage';
import WinnersPage from './pages/winners/winners';
import { setWindowWidth } from './redux/store/slices/window';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<GaragePage />} />
        <Route path='/winners' element={<WinnersPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default App;
