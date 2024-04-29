import SorterResetButton from './reset-button/reset-button';
import TimeSorter from './time-sorter/time-sorter';
import styles from './winners-sorter.module.scss';
import WinsSorter from './wins-sorter/wins-sorter';

const WinnersSorter = () => (
  <div className={styles.wrapper}>
    <h3>Sort by</h3>
    <div className={styles.list}>
      <TimeSorter />
      <WinsSorter />
      <SorterResetButton />
    </div>
  </div>
);

export default WinnersSorter;
