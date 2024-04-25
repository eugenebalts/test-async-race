import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './close-button.module.scss';
import { ICloseButtonProps } from './types';

const CloseButton: React.FC<ICloseButtonProps> = ({ onClose }) => (
  <div className={styles.wrapper} onClick={onClose} role='button' aria-hidden='true'>
    <CloseIcon />
  </div>
);

export default CloseButton;
