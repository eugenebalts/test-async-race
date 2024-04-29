import TimeSorter from './time-sorter/time-sorter';
import styles from './winners-sorter.module.scss';

const WinnersSorter = () => (
  <div className={styles.wrapper}>
    <h3>Sort by</h3>
    <div className={styles.list}>
      <TimeSorter />
    </div>
  </div>
);

export default WinnersSorter;
