import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import style from './pagination.module.scss';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { garageActions } from '../../../redux/store/slices/garage';

const CustomPagination = () => {
  const { pages, currentPage } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { updateCurrentPage } = garageActions;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(updateCurrentPage(value));
  };

  return (
    <div className={style.wrapper}>
      <Pagination count={pages} page={currentPage} color='primary' onChange={handleChange} />
    </div>
  );
};

export default CustomPagination;
