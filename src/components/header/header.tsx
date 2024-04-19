import Container from '../container/container';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.wrapper}>
    <Container>
      <h1 className={styles.logo}>
        NEED
        <span>FOR</span>
        <br />
        ASYNC
        <br />
        <span>RASING</span>
      </h1>
    </Container>
  </header>
);

export default Header;
