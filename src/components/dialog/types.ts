import { ReactNode } from 'react';

export interface IDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  hiddenCloseButton?: boolean;
}