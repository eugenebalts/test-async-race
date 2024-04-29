import { useState } from 'react';
import clsx from 'clsx';
import SorterResetButton from './reset-button/reset-button';
import TimeSorter from './time-sorter/time-sorter';
import styles from './winners-sorter.module.scss';
import WinsSorter from './wins-sorter/wins-sorter';
import CustomButton from '../../../../components/button/button';
import CustomDialog from '../../../../components/dialog/dialog';

const MobileWinnersSorter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles['open-button__wrapper']}>
      <CustomButton variant='contained' color='primary' onClick={handleClick} content='Sort by' />
      <CustomDialog open={isOpen} onClose={handleClose}>
        <div className={clsx(styles.wrapper, styles.wrapper_mobile)}>
          <h3>Sort by</h3>
          <div className={styles.list}>
            <div className={styles.item}>
              <h4>Wins</h4>
              <WinsSorter />
            </div>
            <div className={styles.item}>
              <h4>Wins</h4>
              <TimeSorter />
            </div>
            <SorterResetButton />
          </div>
        </div>
      </CustomDialog>
    </div>
  );
};

export default MobileWinnersSorter;
