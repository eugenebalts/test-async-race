import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import Car from '../car/car';
import TrackControls from './track-controls/track-controls';
import { Car as ICar } from '../../redux/store/slices/garage/types';
import { driveMode } from '../../redux/store/slices/race/actions';
import styles from './track.module.scss';
import carStyles from '../car/car.module.scss';
import { raceActions } from '../../redux/store/slices/race';

const MemorizedTrackControls = React.memo(TrackControls);
const MemorizedCar = React.memo(Car);

let initialDistance: number;

const Track: FC<ICar> = ({ id, name, color }) => {
  const CAR_WIDTH = 60;

  const { width } = useSelector((state: RootState) => state.windowWidth);
  const raceData = useSelector((state: RootState) => state.race.carsData[id]);
  const { difference, startPostition, finishPosition } = useSelector(
    (state: RootState) => state.race,
  );

  const [carElement, setCarElement] = useState<HTMLElement | null>(null);

  const roadRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { updateStartPosition, updateFinishPosition, updateDifference, informAboutStarting } =
    raceActions;

  const getCarRef = (ref: HTMLElement) => {
    setCarElement(ref);
  };

  const setCarAnimation = (time: number) => {
    if (carElement) {
      carElement.style.transition = `transform ${time / 1000}s linear`;
    }
  };

  const resetAnimation = () => {
    if (carElement) {
      carElement.style.transition = 'unset';
    }
  };

  const getTransform = () => {
    const status = raceData?.status;

    if (status !== undefined && carElement) {
      if (status === 'drive' || status === 'finished') {
        return `translateX(${difference + carElement.clientWidth}px)`;
      }

      if (status === 'broken') {
        const offsetLeftPercent =
          (carElement.getBoundingClientRect().left - startPostition) / initialDistance;
        const currentRoadWidth = finishPosition - startPostition;
        const drivenFromStart = offsetLeftPercent * currentRoadWidth + carElement.clientWidth;

        return `translateX(
        ${drivenFromStart}px)`;
      }
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
    if (raceData) {
      const { status, trajectory } = raceData;

      if (status === 'drive') {
        return;
      }

      if (status === 'started') {
        const { velocity, distance } = trajectory;
        const raceTime = Math.round(distance / velocity);

        setCarAnimation(raceTime);

        dispatch(informAboutStarting(id));
        dispatch(driveMode(id));

        return;
      }
    }

    resetAnimation();
  }, [raceData]);

  return (
    <div className={styles.wrapper} ref={trackRef}>
      <MemorizedTrackControls id={id} name={name} color={color} />
      <div className={styles.road} ref={roadRef}>
        <p className={styles.road__title}>{`#${id} ${name}`}</p>
        <MemorizedCar
          color={color}
          onMount={getCarRef}
          classNames={[raceData?.status === 'broken' ? carStyles.wrapper_broken : '']}
          additionalStyles={{
            transform: getTransform(),
          }}
        />
      </div>
    </div>
  );
};

export default Track;
