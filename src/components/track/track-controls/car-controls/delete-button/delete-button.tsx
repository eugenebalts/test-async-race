import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import { deleteCar } from '../../../../../redux/store/slices/garage/actions';
import CustomButton from '../../../../button/button';
import { IButtonWithIdProps } from '../../../../../general-types/types';
import { deleteWinner } from '../../../../../redux/store/slices/winners/actions';
import { stopEngine } from '../../../../../redux/store/slices/race/actions';

const DeleteCarButton: FC<IButtonWithIdProps> = ({ id }) => {
  const { winners } = useSelector((state: RootState) => state.winners);
  const carParams = useSelector((state: RootState) => state.race.carsParams[id]);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    if (carParams?.status) {
      dispatch(stopEngine(id));
    }

    if (winners[id]) {
      dispatch(deleteWinner(id));
    }

    dispatch(deleteCar(id));
  };

  return (
    <CustomButton
      variant='outlined'
      color='error'
      content={<DeleteIcon fontSize='small' />}
      onClick={handleClick}
    />
  );
};

export default DeleteCarButton;
