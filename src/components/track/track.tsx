import { FC, useEffect, useRef, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import Car from '../car/car';
import TrackControls from './track-controls/track-controls';
import { ICar } from '../../redux/store/slices/garage/types';
import { driveMode, startEngine, stopEngine } from '../../redux/store/slices/race/actions';
import { raceActions } from '../../redux/store/slices/race';
import { CAR_WIDTH } from '../../constants';
import styles from './track.module.scss';
import carStyles from '../car/car.module.scss';
import truncateString from '../../utils/truncate-string';
import calculateTravelTimeSec from '../../utils/calculate-travel-time';

const MemorizedTrackControls = memo(TrackControls);
const MemorizedCar = memo(Car);

let initialDistance: number;

const Track: FC<ICar> = ({ id, name, color }) => {
  const { width } = useSelector((state: RootState) => state.windowWidth);
  const carData = useSelector((state: RootState) => state.race.carsData[id]);
  const { difference, startPostition, finishPosition } = useSelector(
    (state: RootState) => state.race,
  );
  const { isStarted, raceId, isSingle } = useSelector((state: RootState) => state.race.raceData);

  const [carElement, setCarElement] = useState<HTMLElement | null>(null);

  const roadRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const {
    updateStartPosition,
    updateFinishPosition,
    updateDifference,
    switchModeToStart,
    switchModeToStop,
    switchModeToDrive,
  } = raceActions;

  const getCarRef = (ref: HTMLElement) => {
    setCarElement(ref);
  };

  const setCarAnimation = (durationSec: number) => {
    if (carElement) {
      carElement.style.transition = `transform ${durationSec}s linear`;
    }
  };

  const resetAnimation = () => {
    if (carElement) {
      carElement.style.transition = 'unset';
    }
  };

  const getTransform = () => {
    const status = carData?.status;

    if (status !== undefined && status !== 'started' && status !== 'stopped' && carElement) {
      if (status === 'broken') {
        const offsetLeftPercent =
          (carElement.getBoundingClientRect().left - startPostition) / initialDistance;
        const currentRoadWidth = finishPosition - startPostition;
        const drivenFromStart = offsetLeftPercent * currentRoadWidth + carElement.clientWidth;

        return `translateX(
        ${drivenFromStart}px)`;
      }

      return `translateX(${difference + carElement.clientWidth}px)`;
    }

    return 'unset';
  };

  useEffect(() => {
    initialDistance = finishPosition - startPostition;
  });

  useEffect(() => {
    if (roadRef?.current) {
      const start = roadRef.current.getBoundingClientRect().left + CAR_WIDTH;
      const end = roadRef.current.getBoundingClientRect().right - CAR_WIDTH;

      dispatch(updateStartPosition(start));
      dispatch(updateFinishPosition(end));
    }
  }, [width]);

  useEffect(() => {
    dispatch(updateDifference());
  }, [startPostition, finishPosition]);

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
        resetAnimation();
        dispatch(stopEngine(id));
        break;

      default:
        resetAnimation();
        break;
    }
  }, [carData?.status]);

  useEffect(() => {
    const trajectory = carData?.trajectory;

    if (trajectory) {
      const { velocity, distance } = trajectory;
      const animationTime = calculateTravelTimeSec(velocity, distance);

      setCarAnimation(animationTime);

      dispatch(switchModeToDrive(id));
    }
  }, [carData?.trajectory]);

  return (
    <div className={styles.wrapper} ref={trackRef}>
      <MemorizedTrackControls id={id} name={name} color={color} />
      <div className={styles.road} ref={roadRef}>
        <p className={styles.road__title}>{`#${id} ${truncateString(name)}`}</p>
        <MemorizedCar
          color={color}
          onMount={getCarRef}
          classNames={[carData?.status === 'broken' ? carStyles.wrapper_broken : '']}
          additionalStyles={{
            transform: getTransform(),
          }}
        />
      </div>
    </div>
  );
};

export default Track;
