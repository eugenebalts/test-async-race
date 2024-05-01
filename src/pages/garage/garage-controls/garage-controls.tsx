import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { createCar } from '../../../redux/store/slices/garage/actions';
import CreateCar from '../../../components/update-car/update-car';
import GenerateCarsBtn from './generate-cars/generate-cars';
import RaceControls from './race-controls/race-controls';
import { CreateCarDto } from '../../../services/endpoints/garage/types';
import styles from './garage-controls.module.scss';

const GarageControls = () => {
  const { status } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (updatedCarData: CreateCarDto) => {
    dispatch(createCar(updatedCarData));
  };

  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <RaceControls disabled={status !== 'fulfilled'} />
      </li>
      <li className={styles.item}>
        <CreateCar type='create' onApply={handleApply} disabled={status !== 'fulfilled'} />
      </li>
      <li className={styles.item}>
        <GenerateCarsBtn disabled={status !== 'fulfilled'} />
      </li>
    </ul>
  );
};

export default GarageControls;
