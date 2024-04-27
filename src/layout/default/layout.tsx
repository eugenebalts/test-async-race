import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Container from '../../components/container/container';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Layout = ({ children }: { children: ReactNode }) => (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );

export default Layout;
