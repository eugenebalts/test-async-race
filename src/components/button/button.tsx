import { FC } from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from './types';
import styles from './button.module.scss';

const CustomButton: FC<ButtonProps> = ({
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
