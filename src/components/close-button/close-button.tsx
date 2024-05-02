import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ICloseButtonProps } from './types';
import styles from './close-button.module.scss';

const CloseButton: FC<ICloseButtonProps> = ({ onClose }) => (
  <div className={styles.wrapper} onClick={onClose} role='button' aria-hidden='true'>
    <CloseIcon />
  </div>
);

export default CloseButton;
