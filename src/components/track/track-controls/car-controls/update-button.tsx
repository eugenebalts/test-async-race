import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store/store';
import { Car } from '../../../../redux/store/slices/garage/types';
import UpdateCar from '../../../update-car/update-car';
import { updateCar } from '../../../../redux/store/slices/garage/actions';
import { CreateCarDto } from '../../../../services/endpoints/garage/types';

const UpdateButton: FC<Car> = ({ id, name, color }) => {
  const initialData: CreateCarDto = { name, color };
  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (updatedName: string, updatedColor: string) => {
    dispatch(
      updateCar({
        id,
        data: {
          name: updatedName,
          color: updatedColor,
        },
      }),
    );
  };

  return <UpdateCar type='update' onApply={handleApply} initialData={initialData} />;
};

export default UpdateButton;
