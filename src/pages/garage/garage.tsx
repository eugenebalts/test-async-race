import NavigationBar from '../../components/navigation-bar/navigation-bar';
import Tracks from '../../components/tracks/tracks';
import GarageControls from './garage-controls/garage-controls';
import styles from './garage.module.scss';

const GaragePage = () => (
  <div className={styles.wrapper}>
    <NavigationBar />
    <h2>Garage</h2>
    <GarageControls />
    <Tracks />
  </div>
);

export default GaragePage;
