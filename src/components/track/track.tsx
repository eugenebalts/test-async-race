import { FC, useEffect, useRef, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { AppDispatch, RootState } from '../../redux/store/store';
import Car from '../car/car';
import TrackControls from './track-controls/track-controls';
import { ICar } from '../../redux/store/slices/garage/types';
import { driveMode, startEngine, stopEngine } from '../../redux/store/slices/race/actions';
import { raceActions } from '../../redux/store/slices/race';
import { CAR_WIDTH } from '../../constants';
import styles from './track.module.scss';
import truncateString from '../../utils/truncate-string';
import calculateTravelTimeSec from '../../utils/calculate-travel-time';
import extractNumericValuesFromString from '../../utils/extract-numeric-value-from-string';

const MemorizedTrackControls = memo(TrackControls);
const MemorizedCar = memo(Car);

const Track: FC<ICar> = ({ id, name, color }) => {
  const { width } = useSelector((state: RootState) => state.windowWidth);
  const carData = useSelector((state: RootState) => state.race.carsData[id]);
  const { difference } = useSelector((state: RootState) => state.race);
  const { isStarted, raceId, isSingle } = useSelector((state: RootState) => state.race.raceData);

  const [animationDuration, setAnimationDuration] = useState<number>();
  const [transform, setTransform] = useState<number>();
  const [drivenPercent, setDrivenPercent] = useState<number>(0);
  const initialDifferenceRef = useRef<number>(0);

  const roadRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { updateDifference, switchModeToStart, switchModeToStop, switchModeToDrive } = raceActions;

  const getTransform = () => {
    const status = carData?.status;

    if (status && status !== 'started' && status !== 'stopped') {
      if (status === 'broken') {
        if (motionRef.current && !drivenPercent) {
          const currentTransform = motionRef?.current?.style.transform;
          const currentTranslateX = extractNumericValuesFromString(currentTransform, 'translateX');
          const newDrivenPercent = currentTranslateX / initialDifferenceRef.current;
          setDrivenPercent(newDrivenPercent);

          return newDrivenPercent * difference;
        }

        return drivenPercent * difference;
      }

      return difference;
    }

    return 0;
  };

  useEffect(() => {
    if (roadRef?.current) {
      const start = roadRef.current.getBoundingClientRect().left + CAR_WIDTH;
      const finish = roadRef.current.getBoundingClientRect().right;

      if (!initialDifferenceRef.current) {
        initialDifferenceRef.current = finish - start;
      }

      dispatch(updateDifference(finish - start));
    }
  }, [width]);

  useEffect(() => {
    setTransform(getTransform());
  }, [difference, animationDuration]);

  useEffect(() => {
    if (isStarted) {
      if (!isSingle) {
        dispatch(switchModeToStart({ id, isSingle: false }));
      }
    } else {
      dispatch(switchModeToStop(id));
    }
  }, [isStarted]);

  useEffect(() => {
    const status = carData?.status;

    switch (status) {
      case 'started':
        dispatch(startEngine(id));
        break;

      case 'drive':
        dispatch(driveMode({ id, raceId }));
        break;

      case 'stopped':
        setAnimationDuration(0);
        setTransform(0);
        setDrivenPercent(0);
        dispatch(stopEngine(id));
        break;

      default:
        setAnimationDuration(0);
        break;
    }
  }, [carData?.status]);

  useEffect(() => {
    const trajectory = carData?.trajectory;

    if (trajectory) {
      const { velocity, distance } = trajectory;
      const animationTime = calculateTravelTimeSec(velocity, distance);

      setAnimationDuration(animationTime);

      dispatch(switchModeToDrive(id));
    }
  }, [carData?.trajectory]);

  return (
    <div className={styles.wrapper}>
      <MemorizedTrackControls id={id} name={name} color={color} />
      <div className={styles.road} ref={roadRef}>
        <p className={styles.road__title}>{`#${id} ${truncateString(name)}`}</p>
        <motion.div
          transition={{ duration: animationDuration, ease: 'linear' }}
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
