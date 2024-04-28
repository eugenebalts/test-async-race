import { FC } from 'react';
import clsx from 'clsx';
import NavigationBar from '../components/navigation-bar/navigation-bar';
import styles from './page.module.scss';
import { IPageProps } from './types';

const Page: FC<IPageProps> = ({ visible, children }) => {
  const pageClasses = clsx('page-classes', {
    [styles.wrapper]: true,
    [styles.wrapper_hidden]: !visible,
  });

  return (
    <div className={pageClasses}>
      <NavigationBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Page;
