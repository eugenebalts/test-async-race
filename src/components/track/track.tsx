import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Car from '../car/car';
import styles from './track.module.scss';
import TrackControls from './track-controls/track-controls';
import { Car as ICar } from '../../redux/store/slices/garage/types';

const Track: FC<ICar> = ({ id, name, color }) => {
  const [raceTime, setRaceTime] = useState<number | null>(null);
  const raceData = useSelector((state: RootState) => state.race.carsData[id]);
  const [carElement, setCarElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (raceData) {
      const { velocity, distance } = raceData.trajectory;

      setRaceTime(Math.round(distance / velocity));
    }

    console.log(carElement);
    // 1 Animate car DONE
    // 2 Drive engine
    // 3 Handle results
  }, [raceData]);

  const getCarRef = (ref: HTMLElement) => {
    setCarElement(ref);
  };

  return (
    <div className={styles.wrapper}>
      <TrackControls id={id} name={name} color={color} />
      <div className={styles.road}>
        <p className={styles.road__title}>{`#${id} ${name}`}</p>
        <Car color={color} animationTime={raceTime} onMount={getCarRef} />
      </div>
    </div>
  );
};

export default Track;
