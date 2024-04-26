import { ICar } from '../../../../redux/store/slices/garage/types';
import { IWinner } from '../../../../redux/store/slices/winners/types';

export type WinnerItemProps = Pick<ICar, 'color' | 'name'> & IWinner;
