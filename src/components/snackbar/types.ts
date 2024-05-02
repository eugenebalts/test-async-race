import { SnackbarOrigin } from '@mui/material';

export interface ISnackbarState extends SnackbarOrigin {
  isOpen: boolean;
}

export interface ISnackbarProps {
  cause: boolean;
  message: string;
}
