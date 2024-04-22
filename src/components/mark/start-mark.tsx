import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { AppDispatch, RootState } from '../../redux/store/store';
import { raceActions } from '../../redux/store/slices/race';
import styles from './mark.module.scss';

const StartMark = () => {
  const { START_POS, CAR_WIDTH } = useSelector((state: RootState) => state.garage);
  const startPosition = useSelector((state: RootState) => state.race.startPostition);
  const windowWidth = useSelector((state: RootState) => state.windowWidth.width);
  const markRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { updateStartPosition, updateDifference } = raceActions;

  useEffect(() => {
    const markPosition = markRef.current?.getBoundingClientRect().left;

    if (markPosition !== undefined) {
      dispatch(updateStartPosition(markPosition));
    }
  }, [windowWidth]);

  useEffect(() => {
    dispatch(updateDifference());
  }, [startPosition, windowWidth]);

  return (
    <div
      className={styles.mark}
      style={{ left: `calc(${START_POS} + ${CAR_WIDTH})` }}
      ref={markRef}
    >
      Start <RocketLaunchRoundedIcon fontSize='small' />
    </div>
  );
};

export default StartMark;
