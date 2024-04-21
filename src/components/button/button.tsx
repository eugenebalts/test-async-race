import { FC } from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from './types';
import styles from './button.module.scss';

const CustomButton: FC<ButtonProps> = ({
  content,
  variant = 'contained',
  color = 'primary',
  type = 'button',
  onClick,
}) => (
  <Button className={styles.button} variant={variant} color={color} onClick={onClick} type={type}>
    {content}
  </Button>
);

export default CustomButton;
