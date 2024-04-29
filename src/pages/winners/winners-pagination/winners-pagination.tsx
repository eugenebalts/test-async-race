import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import CustomPagination from '../../../components/pagination/pagination';
import { winnersActions } from '../../../redux/store/slices/winners';

const WinnersPagination = () => {
  const { pages, currentPage } = useSelector((state: RootState) => state.winners);

  const dispatch = useDispatch<AppDispatch>();
  const { updateCurrentPage } = winnersActions;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(updateCurrentPage(value));
  };

  return (
    <CustomPagination color='secondary' count={pages} page={currentPage} onChange={handleChange} />
  );
};

export default WinnersPagination;
