import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { ISnackbarProps, ISnackbarState } from './types';

const CustomSnackbar: FC<ISnackbarProps> = ({ cause, message }) => {
  const [state, setState] = useState<ISnackbarState>({
    isOpen: cause,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const { vertical, horizontal, isOpen } = state;

  useEffect(() => {
    if (cause) {
      setState({ ...state, isOpen: true });
    } else {
      setState({ ...state, isOpen: false });
    }
  }, [cause]);

  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({ ...state, isOpen: false });
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert onClose={handleClose} severity='error' variant='filled' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
