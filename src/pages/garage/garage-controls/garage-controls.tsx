import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/store';
import { createCar } from '../../../redux/store/slices/garage/actions';
import CreateCar from '../../../components/update-car/update-car';
import styles from './garage-controls.module.scss';
import GenerateCarsBtn from './generate-cars/generate-cars';

const GarageControls = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (name: string, color: string) => {
    dispatch(createCar({ name, color }));
  };

  return (
    <ul className={styles.list}>
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
