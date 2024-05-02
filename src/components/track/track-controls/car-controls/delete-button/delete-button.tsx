import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import CustomButton from '../../../../button/button';
import { IButtonWithIdProps } from '../../../../button/types';
import { deleteCar } from '../../../../../redux/store/slices/garage/actions';
import { deleteWinner } from '../../../../../redux/store/slices/winners/actions';
import { stopEngine } from '../../../../../redux/store/slices/race/actions';

const DeleteCarButton: FC<IButtonWithIdProps> = ({ id }) => {
  const carParams = useSelector((state: RootState) => state.race.carsParams[id]);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = async () => {
    if (carParams?.status) {
      dispatch(stopEngine(id));
    }

    const deleteCarResults = await dispatch(deleteCar(id));

    if (deleteCarResults.meta.requestStatus === 'fulfilled') {
      dispatch(deleteWinner(id));
    }
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
