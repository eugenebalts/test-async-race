import { Status } from '../../redux/store/slices/types';

export interface IStatusIndicatorProps {
  onReload: () => void;
  status: Status;
}
