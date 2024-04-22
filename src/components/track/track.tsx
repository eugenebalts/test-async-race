import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import Car from '../car/car';
import TrackControls from './track-controls/track-controls';
import { Car as ICar } from '../../redux/store/slices/garage/types';
import { driveMode } from '../../redux/store/slices/race/actions';
import styles from './track.module.scss';
import carStyles from '../car/car.module.scss';
import { raceActions } from '../../redux/store/slices/race';

const Track: FC<ICar> = ({ id, name, color }) => {
  const raceData = useSelector((state: RootState) => state.race.carsData[id]);
  const { difference, startPostition, finishPosition } = useSelector(
    (state: RootState) => state.race,
  );
  const { width } = useSelector((state: RootState) => state.windowWidth);
  const [carElement, setCarElement] = useState<HTMLElement | null>(null);

  const roadRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { updateStartPosition, updateFinishPosition, updateDifference } = raceActions;

  useEffect(() => {
    if (roadRef?.current) {
      const CAR_WIDTH = 60;
      const start = roadRef.current.getBoundingClientRect().left + CAR_WIDTH;
      const end = roadRef.current.getBoundingClientRect().right - CAR_WIDTH;

      dispatch(updateStartPosition(start));
      dispatch(updateFinishPosition(end));
    }
  }, [width]);

  useEffect(() => {
    dispatch(updateDifference());
  }, [width, startPostition, finishPosition]);

  const getCarRef = (ref: HTMLElement) => {
    setCarElement(ref);
  };

  const setRaceAnimation = (time: number) => {
    if (carElement) {
      carElement.classList.add(carStyles.wrapper_animated);
      carElement.style.setProperty('--animation-duration', `${time / 1000}s`);
      carElement.style.setProperty(
        'transform',
        `translateX(${(difference ?? 0) + carElement.clientWidth}px)`,
      );
    }
  };

  const stopRaceAnimation = () => {
    if (carElement) {
      const curCarPosition = carElement?.getBoundingClientRect().left;

      carElement.style.setProperty(
        'transform',
        `translateX(${curCarPosition - (startPostition ?? 0) + carElement.clientWidth}px)`,
      );
      carElement.classList.remove(carStyles.wrapper_animated);
      carElement.style.removeProperty('--animation-duration');

      carElement.classList.add(carStyles.wrapper_broken);
    }
  };

  useEffect(() => {
    if (raceData?.trajectory) {
      const { velocity, distance } = raceData.trajectory;

      const raceTime = Math.round(distance / velocity);

      setRaceAnimation(raceTime);
      dispatch(driveMode(id));
    }
  }, [raceData?.trajectory]);

  useEffect(() => {
    const status = raceData?.status;

    if (status === 'broken') {
      stopRaceAnimation();
    }
  }, [raceData?.status]);

  return (
    <div className={styles.wrapper} ref={trackRef}>
      <TrackControls id={id} name={name} color={color} />
      <div className={styles.road} ref={roadRef}>
        <p className={styles.road__title}>{`#${id} ${name}`}</p>
        <Car color={color} onMount={getCarRef} />
      </div>
    </div>
  );
};

export default Track;
