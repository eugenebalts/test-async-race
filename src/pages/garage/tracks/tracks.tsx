import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { raceActions } from '../../../redux/store/slices/race';
import { CAR_WIDTH } from '../../../constants';
import FinishMark from '../../../components/mark/finish-mark';
import StartMark from '../../../components/mark/start-mark';
import styles from './tracks.module.scss';
import WinnerDialog from '../winner-dialog/winner-dialog';
import TracksList from './tracks-list/tracks-list';

const Tracks = () => {
  const { width } = useSelector((state: RootState) => state.windowWidth);
  const { isOpen } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { updateDifference } = raceActions;

  const startMarkRef = useRef<HTMLDivElement>(null);
  const finishMarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startMarkRef.current && finishMarkRef.current && isOpen) {
      const start = startMarkRef.current.getBoundingClientRect().left;
      const finish = finishMarkRef.current.getBoundingClientRect().right + CAR_WIDTH;

      dispatch(updateDifference(finish - start));
    }
  }, [width, startMarkRef, finishMarkRef, isOpen]);

  return (
    <div className={styles.wrapper}>
      <StartMark ref={startMarkRef} />
      <TracksList />
      <FinishMark ref={finishMarkRef} />
      <WinnerDialog />
    </div>
  );
};

export default Tracks;
