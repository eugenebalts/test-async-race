import { useState } from 'react';
import CustomButton from '../../../../components/button/button';
import CustomDialog from '../../../../components/dialog/dialog';
import WinnersSorter from '../winners-sorter-content';
import styles from './mobile-winners-sorter.module.scss';

const MobileWinnersSorter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <CustomButton variant='contained' color='primary' onClick={handleClick} content='Sort by' />
      <CustomDialog open={isOpen} onClose={handleClose}>
        <h3>Sort by</h3>
        <WinnersSorter onChange={handleClose} />
      </CustomDialog>
    </div>
  );
};

export default MobileWinnersSorter;
