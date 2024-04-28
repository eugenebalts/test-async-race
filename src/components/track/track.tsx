import { FC, useEffect, useRef, useState, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { AppDispatch, RootState } from '../../redux/store/store';
import Car from '../car/car';
import TrackControls from './track-controls/track-controls';
import { ICar } from '../../redux/store/slices/garage/types';
import { driveMode, startEngine, stopEngine } from '../../redux/store/slices/race/actions';
import { raceActions } from '../../redux/store/slices/race';
import { CAR_WIDTH } from '../../constants';
import truncateString from '../../utils/truncate-string';
import extractNumericValuesFromString from '../../utils/extract-numeric-value-from-string';
import styles from './track.module.scss';
import { CarRaceStatus } from '../../redux/store/slices/race/types';

const MemorizedTrackControls = memo(TrackControls);
const MemorizedCar = memo(Car);

const Track: FC<ICar> = ({ id, name, color }) => {
  const { width } = useSelector((state: RootState) => state.windowWidth);
  const carData = useSelector((state: RootState) => state.race.carsData[id]);
  const { difference } = useSelector((state: RootState) => state.race);
  const { isStarted, raceId, isSingle, busyTracks, membersForRace } = useSelector(
    (state: RootState) => state.race.raceData,
  );

  const [transform, setTransform] = useState<number>();
  const [drivenPercent, setDrivenPercent] = useState<number>(0);

  const roadRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const initialDifferenceRef = useRef<number>(0);
  const statusRef = useRef<CarRaceStatus>();

  const dispatch = useDispatch<AppDispatch>();
  const { updateDifference, switchModeToStart, switchModeToDrive, switchModeToStop } = raceActions;

  const getTransform = useCallback((): number => {
    const status = carData?.status;

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
  }, [carData?.status, difference, drivenPercent]);

  const getAnimationDuration = useCallback(
    () => (carData?.status === 'drive' ? carData.time : 0),
    [carData?.status],
  );

  useEffect(() => {
    return () => {
      if (statusRef.current) {
        dispatch(stopEngine(id));
      }
    };
  }, []);

  useEffect(() => {
    if (roadRef?.current) {
      const start = roadRef.current.getBoundingClientRect().left + CAR_WIDTH;
      const finish = roadRef.current.getBoundingClientRect().right;

      dispatch(updateDifference(finish - start));
    }
  }, [width]);

  useEffect(() => {
    setTransform(getTransform()); // 5 after carData.status has become DRIVING we'll get transform
  }, [difference, carData?.status]);

  useEffect(() => {
    // 1* sets status 'started / stopped' after click start/stop race btn
    initialDifferenceRef.current = difference;

    if (isSingle) return;

    if (isStarted) {
      dispatch(switchModeToStart({ id, isSingle: false }));
    } else if (carData?.status) {
      dispatch(switchModeToStop(id));
    }
  }, [isStarted, isSingle]);

  useEffect(() => {
    const status = carData?.status;
    statusRef.current = status;

    switch (status) {
      case 'started':
        setDrivenPercent(0);
        dispatch(startEngine(id)); //  2 start engine req (get anim time and take place on track)
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
  }, [carData?.status]);

  useEffect(() => {
    const time = carData?.time;

    if (time && (busyTracks.length === membersForRace || isSingle)) {
      dispatch(switchModeToDrive(id)); // 3 sets status drive all the cars simultaneously
    }
  }, [carData?.time, busyTracks, membersForRace]);

  return (
    <div className={styles.wrapper}>
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
          <MemorizedCar color={color} isBroken={carData?.status === 'broken'} />
        </motion.div>
      </div>
    </div>
  );
};

export default Track;
