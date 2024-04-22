import { ReactNode } from 'react';

export interface ButtonProps {
  content: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}
