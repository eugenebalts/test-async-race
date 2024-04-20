import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { createCar } from '../../redux/store/slices/garage/actions';
import UpdateCar from '../../components/update-car/update-car';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import Tracks from '../../components/tracks/tracks';
import styles from './garage.module.scss';

const GaragePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleApply = (name: string, color: string) => {
    dispatch(createCar({ name, color }));
  };

  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      GARAGE PAGE
      <UpdateCar type='create' onApply={handleApply} />
      <Tracks />
    </div>
  );
};

export default GaragePage;
