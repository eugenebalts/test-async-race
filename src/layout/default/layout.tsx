import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Container from '../../packages/components/container/container';
import Header from '../../packages/components/header/header';
import Footer from '../../packages/components/footer/footer';

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
