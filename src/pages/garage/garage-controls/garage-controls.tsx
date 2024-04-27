import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/store';
import { createCar } from '../../../redux/store/slices/garage/actions';
import CreateCar from '../../../components/update-car/update-car';
import styles from './garage-controls.module.scss';
import GenerateCarsBtn from './generate-cars/generate-cars';
import RaceControls from './race-controls/race-controls';
import { CreateCarDto } from '../../../services/endpoints/garage/types';

const GarageControls = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (updatedCarData: CreateCarDto) => {
    dispatch(createCar(updatedCarData));
  };

  return (
    <ul className={styles.wrapper}>
      <li>
        <RaceControls />
      </li>
      <li>
        <CreateCar type='create' onApply={handleApply} />
      </li>
      <li>
        <GenerateCarsBtn />
      </li>
    </ul>
  );
};

export default GarageControls;
