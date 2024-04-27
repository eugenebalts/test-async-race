import { Dialog } from '@mui/material';
import { FC } from 'react';
import CloseButton from '../close-button/close-button';
import { IDialogProps } from './types';
import styles from './dialog.module.scss';

const CustomDialog: FC<IDialogProps> = ({ open, onClose, children, hiddenCloseButton }) => (
    <Dialog className={styles.wrapper} open={open} onClose={onClose}>
      {!hiddenCloseButton && <CloseButton onClose={onClose} />}
      {children}
    </Dialog>
  );

export default CustomDialog;
