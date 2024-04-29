import { ReactNode } from 'react';
import { Status } from '../redux/store/slices/types';

export interface IPageProps {
  title?: string;
  visible: boolean;
  children: ReactNode;
  status?: Status;
  onReload: () => void;
}
