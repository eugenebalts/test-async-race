import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store/store';
import Layout from './layout/layout';
import GaragePage from './pages/garage/garage';
import WinnersPage from './pages/winners/winners';
import { setWindowWidth } from './redux/store/slices/window';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { hash } = useLocation();
  const navigate = useNavigate();

  const pathnames = ['', '#winners'];

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
    if (!pathnames.includes(hash)) {
      navigate('');
    }
  }, [hash]);

  return (
    <Layout>
      <GaragePage visible={hash === ''} />
      <WinnersPage visible={hash === '#winners'} />
    </Layout>
  );
};

export default App;
