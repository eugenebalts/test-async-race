import { FC } from 'react';
import clsx from 'clsx';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, CircularProgress } from '@mui/material';
import NavigationBar from '../components/navigation-bar/navigation-bar';
import { IPageProps } from './types';
import styles from './page.module.scss';
import CustomSnackbar from '../components/snackbar/snackbar';

const Page: FC<IPageProps> = ({ title, visible, children, status, onReload }) => {
  const pageClasses = clsx('page-classes', {
    [styles.wrapper]: true,
    [styles.wrapper_hidden]: !visible,
  });

  return (
    <div className={pageClasses}>
      <NavigationBar />
      <div className={styles.content}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {status === 'fullfield' || !status ? (
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
      <CustomSnackbar cause={status === 'rejected'} message='Failed to load page' />
    </div>
  );
};

export default Page;
