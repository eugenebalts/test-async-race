import Car from '../../packages/components/car/car';
import NavigationBar from '../../packages/components/navigation-bar/navigation-bar';
import styles from './garage.module.scss';

const GaragePage = () => (
  <div className={styles.wrapper}>
    <NavigationBar />
    GARAGE PAGE
    <Car color='#ff2155' />
  </div>
);

export default GaragePage;
