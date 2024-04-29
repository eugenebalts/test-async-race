import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/store';
import { createCar } from '../../../redux/store/slices/garage/actions';
import CreateCar from '../../../components/update-car/update-car';
import GenerateCarsBtn from './generate-cars/generate-cars';
import RaceControls from './race-controls/race-controls';
import { CreateCarDto } from '../../../services/endpoints/garage/types';
import styles from './garage-controls.module.scss';

const GarageControls = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (updatedCarData: CreateCarDto) => {
    dispatch(createCar(updatedCarData));
  };

  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <RaceControls />
      </li>
      <li className={styles.item}>
        <CreateCar type='create' onApply={handleApply} />
      </li>
      <li className={styles.item}>
        <GenerateCarsBtn />
      </li>
    </ul>
  );
};

export default GarageControls;
