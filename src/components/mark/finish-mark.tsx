import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { AppDispatch, RootState } from '../../redux/store/store';
import styles from './mark.module.scss';
import { raceActions } from '../../redux/store/slices/race';

const FinishMark = () => {
  const { END_POS } = useSelector((state: RootState) => state.garage);
  const fiishPosition = useSelector((state: RootState) => state.race.finishPosition);
  const windowWidth = useSelector((state: RootState) => state.windowWidth.width);

  const markRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { updateFinishPosition, updateDifference } = raceActions;

  useEffect(() => {
    const markPosition = markRef.current?.getBoundingClientRect().right;

    if (markPosition !== undefined) {
      dispatch(updateFinishPosition(markPosition));
    }
  }, [windowWidth]);

  useEffect(() => {
    dispatch(updateDifference());
  }, [fiishPosition, windowWidth]);

  return (
    <div className={styles.mark} style={{ right: END_POS }} ref={markRef}>
      Finish <SportsScoreIcon fontSize='small' />
    </div>
  );
};

export default FinishMark;
