import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store/store';
import UpdateCar from '../../../../update-car/update-car';
import { updateCar } from '../../../../../redux/store/slices/garage/actions';
import { CreateCarDto } from '../../../../../services/endpoints/garage/types';
import { UpdateCarButtonProps } from './types';

const UpdateCarButton: FC<UpdateCarButtonProps> = ({ id, name, color }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (updatedCarData: CreateCarDto) => {
    dispatch(
      updateCar({
        id,
        data: updatedCarData,
      }),
    );
  };

  return <UpdateCar type='update' onApply={handleApply} initialData={{ name, color }} />;
};

export default UpdateCarButton;
