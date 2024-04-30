import { FC } from 'react';
import clsx from 'clsx';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, CircularProgress } from '@mui/material';
import NavigationBar from '../components/navigation-bar/navigation-bar';
import { IPageProps } from './types';
import CustomSnackbar from '../components/snackbar/snackbar';
import { ERROR_MESSAGE } from '../constants';
import styles from './page.module.scss';

const Page: FC<IPageProps> = ({ title, visible, children, status, error = false, onReload }) => {
  const pageClasses = clsx('page-classes', {
    [styles.wrapper]: true,
    [styles.wrapper_hidden]: !visible,
  });

  return (
    <div className={pageClasses}>
      <NavigationBar />
      <div className={styles.content}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {status === 'fulfilled' || !status ? (
          children
        ) : (
          <div className={styles.loading}>
            {status === 'pending' && (
              <Box>
                <CircularProgress />
              </Box>
            )}
            {status === 'rejected' && (
              <ReplayIcon onClick={onReload} fontSize='large' style={{ cursor: 'pointer' }} />
            )}
          </div>
        )}
      </div>
      <CustomSnackbar cause={error} message={ERROR_MESSAGE} />
    </div>
  );
};

export default Page;
