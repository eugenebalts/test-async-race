import UpdateCar from '../../components/update-car/update-car';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import Tracks from '../../components/tracks/tracks';
import styles from './garage.module.scss';

const GaragePage = () => {
  const handleApply = (name: string, color: string) => {
    console.log(`TODO: CREATE CAR WITH PARAMS ${name}, ${color}`);
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
