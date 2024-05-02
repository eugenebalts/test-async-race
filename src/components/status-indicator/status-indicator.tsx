import { FC } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, CircularProgress } from '@mui/material';
import { IStatusIndicatorProps } from './types';
import styles from './status-indicator.module.scss';

const StatusIndicator: FC<IStatusIndicatorProps> = ({ onReload, status }) => (
  <div className={styles.wrapper}>
    {status === 'pending' && (
      <Box>
        <CircularProgress />
      </Box>
    )}
    {status === 'rejected' && (
      <ReplayIcon onClick={onReload} fontSize='large' style={{ cursor: 'pointer' }} />
    )}
  </div>
);

export default StatusIndicator;
