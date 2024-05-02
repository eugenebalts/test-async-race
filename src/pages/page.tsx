import { FC } from 'react';
import clsx from 'clsx';
import NavigationBar from '../components/navigation-bar/navigation-bar';
import { IPageProps } from './types';
import CustomSnackbar from '../components/snackbar/snackbar';
import { ERROR_MESSAGE } from '../constants';
import styles from './page.module.scss';

const Page: FC<IPageProps> = ({ visible, children, error = false }) => {
  const pageClasses = clsx('page-classes', {
    [styles.wrapper]: true,
    [styles.wrapper_hidden]: !visible,
  });

  return (
    <div className={pageClasses}>
      <NavigationBar />
      <div className={styles.content}>{children}</div>
      <CustomSnackbar cause={error} message={ERROR_MESSAGE} />
    </div>
  );
};

export default Page;
