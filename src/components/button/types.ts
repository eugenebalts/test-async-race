import { ReactNode } from 'react';

export interface IButtonProps {
  content: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

export interface IButtonWithIdProps {
  id: number;
}
