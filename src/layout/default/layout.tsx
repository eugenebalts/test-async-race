import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Container from '../../components/container/container';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
