import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Container from '../../packages/components/container/container';
import Header from '../../packages/components/header/header';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}
