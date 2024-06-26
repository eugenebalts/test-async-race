import { FC } from 'react';
import { Button } from '@mui/material';
import { IButtonProps } from './types';
import styles from './button.module.scss';

const CustomButton: FC<IButtonProps> = ({
  content,
  variant = 'contained',
  color = 'primary',
  type = 'button',
  disabled = false,
  onClick,
}) => (
  <Button
    className={styles.button}
    variant={variant}
    color={color}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {content}
  </Button>
);

export default CustomButton;
