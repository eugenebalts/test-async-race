import { FC } from 'react';
import NavigationBar from '../components/navigation-bar/navigation-bar';
import styles from './page.module.scss';
import { IPageProps } from './types';

const Page: FC<IPageProps> = ({ visible, children }) => (
  <div className={`${styles.wrapper} ${visible ? styles.wrapper_hidden : ''}`}>
    <NavigationBar />
    <div className={styles.content}>{children}</div>
  </div>
);

export default Page;
