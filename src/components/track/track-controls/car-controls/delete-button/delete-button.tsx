import { FC } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppDispatch } from '../../../../../redux/store/store';
import { deleteCar } from '../../../../../redux/store/slices/garage/actions';
import CustomButton from '../../../../button/button';
import { IButtonWithIdProps } from '../../../../../general-types/types';

const DeleteCarButton: FC<IButtonWithIdProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
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
