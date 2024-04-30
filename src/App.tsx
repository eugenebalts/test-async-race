import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store/store';
import Layout from './layout/layout';
import GaragePage from './pages/garage/garage';
import WinnersPage from './pages/winners/winners';
import { setWindowWidth } from './redux/store/slices/window';
import { NavigationLinks } from './constants';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!Object.values(NavigationLinks).includes(hash as NavigationLinks)) {
      navigate(NavigationLinks.GARAGE);
    }
  }, [hash]);

  return (
    <Layout>
      <GaragePage visible={hash === NavigationLinks.GARAGE} />
      <WinnersPage visible={hash === NavigationLinks.WINNERS} />
    </Layout>
  );
};

export default App;
