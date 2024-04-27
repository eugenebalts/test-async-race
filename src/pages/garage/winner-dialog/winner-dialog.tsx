import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomDialog from '../../../components/dialog/dialog';
import { RootState } from '../../../redux/store/store';
import styles from './winner-dialog.module.scss';
import truncateString from '../../../utils/truncate-string';

const WinnerDialog = () => {
  const { cars } = useSelector((state: RootState) => state.garage);
  const { winner } = useSelector((state: RootState) => state.race.raceData);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const DIALOG_CLOSE_DELAY = 5000;

  useEffect(() => {
    if (winner) {
      setIsDialogOpen(true);

      setTimeout(() => {
        setIsDialogOpen(false);
      }, DIALOG_CLOSE_DELAY);
    }
  }, [winner]);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <CustomDialog open={isDialogOpen} onClose={handleDialogClose} hiddenCloseButton>
      <div className={styles.content}>
        {winner && (
          <>
            <p className={styles.row}>{`Winner: ${truncateString(cars[winner.id].name)}`}</p>
            <p className={styles.row}>{`Time: ${winner.time}`}</p>
          </>
        )}
      </div>
    </CustomDialog>
  );
};

export default WinnerDialog;
