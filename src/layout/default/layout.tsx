import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Container from '../../packages/components/container/container';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}
