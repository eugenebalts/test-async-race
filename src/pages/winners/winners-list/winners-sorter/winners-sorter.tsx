import CustomAccordion from '../../../../components/accordion/accordion';
import SorterResetButton from './reset-button/reset-button';
import TimeSorter from './time-sorter/time-sorter';
import styles from './winners-sorter.module.scss';
import WinsSorter from './wins-sorter/wins-sorter';

const WinnersSorter = () => (
  <div className={styles.wrapper}>
    <h3>Sort by</h3>
    <div className={styles.list}>
      <CustomAccordion title='Wins'>
        <WinsSorter />
      </CustomAccordion>
      <CustomAccordion title='Time'>
        <TimeSorter />
      </CustomAccordion>
      <SorterResetButton />
    </div>
  </div>
);

export default WinnersSorter;
