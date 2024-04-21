import { ReactNode } from 'react';

export interface ButtonProps {
  content: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  onClick?: () => void;
}
