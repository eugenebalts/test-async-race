import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { garageActions } from '../../../redux/store/slices/garage';
import CustomPagination from '../../../components/pagination/pagination';

const GaragePagination = () => {
  const { pages, currentPage } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { updateCurrentPage } = garageActions;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(updateCurrentPage(value));
  };

  return <CustomPagination count={pages} page={currentPage} onChange={handleChange} />;
};

export default GaragePagination;
