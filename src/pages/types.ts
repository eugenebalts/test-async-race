import { ReactNode } from 'react';
import { Status } from '../redux/store/slices/types';

export interface IPageProps {
  visible: boolean;
  children: ReactNode;
  status?: Status;
  error?: boolean;
  onReload: () => void;
}
