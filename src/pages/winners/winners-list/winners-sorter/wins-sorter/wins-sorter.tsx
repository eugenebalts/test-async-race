import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import { SortOption } from '../../../../../redux/store/slices/winners/types';
import { winnersActions } from '../../../../../redux/store/slices/winners';
import OrderSorter from '../../../../../components/order-sorter/order-sorter';

const WinsSorter = () => {
  const { wins } = useSelector((state: RootState) => state.winners.sortedBy);

  const dispatch = useDispatch<AppDispatch>();
  const { sortByWins } = winnersActions;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sortByWins(event.currentTarget.value as SortOption));
  };

  return <OrderSorter onChange={handleChange} currentValue={wins} />;
};

export default WinsSorter;
