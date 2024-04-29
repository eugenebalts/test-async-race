import { FC, useEffect, useRef, useState, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { AppDispatch, RootState } from '../../redux/store/store';
import Car from '../car/car';
import TrackControls from './track-controls/track-controls';
import { ICar } from '../../redux/store/slices/garage/types';
import { driveMode, startEngine, stopEngine } from '../../redux/store/slices/race/actions';
import { raceActions } from '../../redux/store/slices/race';
import truncateString from '../../utils/truncate-string';
import extractNumericValuesFromString from '../../utils/extract-numeric-value-from-string';
import styles from './track.module.scss';

const MemorizedTrackControls = memo(TrackControls);
const MemorizedCar = memo(Car);

const Track: FC<ICar> = ({ id, name, color }) => {
  const carParams = useSelector((state: RootState) => state.race.carsParams[id]);
  const { difference } = useSelector((state: RootState) => state.race);
  const { isStarted, raceId, isSingle, busyTracks, membersForRace } = useSelector(
    (state: RootState) => state.race.raceData,
  );

  const [transform, setTransform] = useState<number>();
  const [drivenPercent, setDrivenPercent] = useState<number>(0);

  const roadRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const initialDifferenceRef = useRef<number>(0);

  const dispatch = useDispatch<AppDispatch>();
  const { switchModeToStart, switchModeToDrive, switchModeToStop } = raceActions;

  const getTransform = useCallback((): number => {
    const status = carParams?.status;

    if (status === 'drive' || status === 'finished') {
      return difference;
    }

    if (status === 'broken') {
      if (motionRef.current && !drivenPercent) {
        const currentTransform = motionRef?.current?.style.transform;
        const currentTranslateX = extractNumericValuesFromString(currentTransform, 'translateX');
        const newDrivenPercent = currentTranslateX / initialDifferenceRef.current;

        if (newDrivenPercent) {
          setDrivenPercent(newDrivenPercent);
        }

        return newDrivenPercent * difference;
      }

      return drivenPercent * difference;
    }

    return 0;
  }, [carParams?.status, difference, drivenPercent]);

  const getAnimationDuration = useCallback(
    () => (carParams?.status === 'drive' ? carParams.time : 0),
    [carParams?.status],
  );

  useEffect(
    () => () => {
      if (carParams?.status) {
        dispatch(stopEngine(id));
      }
    },
    [],
  );

  useEffect(() => {
    setTransform(getTransform()); // 5 after carParams.status has become DRIVING we'll get transform
  }, [difference, carParams?.status]);

  useEffect(() => {
    // 1* sets status 'started / stopped' after click start/stop race btn
    initialDifferenceRef.current = difference;

    if (isSingle) return;

    if (isStarted) {
      dispatch(switchModeToStart({ id, isSingle: false }));
    } else if (carParams?.status) {
      dispatch(switchModeToStop(id));
    }
  }, [isStarted, isSingle]);

  useEffect(() => {
    const status = carParams?.status;

    switch (status) {
      case 'started':
        setDrivenPercent(0);
        dispatch(startEngine(id)); //  2 start engine req (get anim time and take place on busyTracks)
        break;

      case 'drive':
        dispatch(driveMode({ id, raceId })); // 4 runs DRIVE REQ

        break;

      case 'stopped':
        dispatch(stopEngine(id));
        break;

      default:
        break;
    }
  }, [carParams?.status]);

  useEffect(() => {
    const time = carParams?.time;
    const status = carParams?.status;

    if (time && status === 'started' && (busyTracks.length >= membersForRace || isSingle)) {
      dispatch(switchModeToDrive(id)); // 3 sets status drive all the cars simultaneously
    }
  }, [carParams?.time, busyTracks, membersForRace]);

  return (
    <li className={styles.wrapper}>
      <MemorizedTrackControls id={id} name={name} color={color} />
      <div className={styles.road} ref={roadRef}>
        <p className={styles.road__title}>{`#${id} ${truncateString(name)}`}</p>
        <motion.div
          transition={{ duration: getAnimationDuration(), ease: 'linear' }}
          animate={{
            x: transform,
          }}
          ref={motionRef}
        >
          <MemorizedCar color={color} isBroken={carParams?.status === 'broken'} />
        </motion.div>
      </div>
    </li>
  );
};

export default Track;
