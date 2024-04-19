import { Link } from '@mui/material';
import Container from '../container/container';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.wrapper}>
    <Container>
      <p className={styles.content}>
        Developed by{' '}
        <Link href='https://github.com/eugenebalts' underline='hover'>
          eugenebalts
        </Link>
      </p>
    </Container>
  </footer>
);

export default Footer;
