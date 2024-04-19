import NavigationBar from '../../packages/components/navigation-bar/navigation-bar';
import Tracks from '../../packages/components/tracks/tracks';
import styles from './garage.module.scss';

const GaragePage = () => (
  <div className={styles.wrapper}>
    <NavigationBar />
    GARAGE PAGE
    <Tracks />
  </div>
);

export default GaragePage;
