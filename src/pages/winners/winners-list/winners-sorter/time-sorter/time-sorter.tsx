import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import { winnersActions } from '../../../../../redux/store/slices/winners';
import { SortOption } from '../../../../../redux/store/slices/winners/types';
import OrderSorter from '../../../../../components/order-sorter/order-sorter';

const TimeSorter = () => {
  const { time } = useSelector((state: RootState) => state.winners.sortedBy);

  const dispatch = useDispatch<AppDispatch>();
  const { sortByTime } = winnersActions;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sortByTime(event.currentTarget.value as SortOption));
  };

  return <OrderSorter onChange={handleChange} currentValue={time} />;
};

export default TimeSorter;
