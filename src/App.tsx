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
  const { pathname } = useLocation();
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
    if (!Object.values(NavigationLinks).includes(pathname as NavigationLinks)) {
      navigate(NavigationLinks.GARAGE);
    }
  }, [pathname]);

  // React-Dom Routes are not used to save animation state
  return (
    <Layout>
      <GaragePage visible={pathname === NavigationLinks.GARAGE} />
      {pathname === NavigationLinks.WINNERS && <WinnersPage />}
    </Layout>
  );
};

export default App;
