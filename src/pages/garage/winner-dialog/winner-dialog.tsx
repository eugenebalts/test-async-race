import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDialog from '../../../components/dialog/dialog';
import { AppDispatch, RootState } from '../../../redux/store/store';
import styles from './winner-dialog.module.scss';
import truncateString from '../../../utils/truncate-string';
import { createOrUpdateWinner } from '../../../redux/store/slices/winners/actions';

const WinnerDialog = () => {
  const DIALOG_CLOSE_DELAY = 5000;
  const { cars, isOpen } = useSelector((state: RootState) => state.garage);
  const { winner } = useSelector((state: RootState) => state.race.raceData);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (winner) {
      if (isOpen) {
        setIsDialogOpen(true);
      }

      dispatch(createOrUpdateWinner(winner));

      timeoutId = setTimeout(() => {
        setIsDialogOpen(false);
      }, DIALOG_CLOSE_DELAY);
    } else {
      setIsDialogOpen(false);
    }

    return () => clearTimeout(timeoutId);
  }, [winner]);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <CustomDialog open={isDialogOpen} onClose={handleDialogClose} hiddenCloseButton>
      <div className={styles.content}>
        {winner && (
          <>
            <p
              className={styles.row}
            >{`Winner: ${truncateString(cars[winner.id]?.name ?? 'unknown')}`}</p>
            <p className={styles.row}>{`Time: ${winner.time}s`}</p>
          </>
        )}
      </div>
    </CustomDialog>
  );
};

export default WinnerDialog;
