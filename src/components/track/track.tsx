import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Car from '../car/car';
import styles from './track.module.scss';
import TrackControls from './track-controls/track-controls';
import { Car as ICar } from '../../redux/store/slices/garage/types';

const Track: FC<ICar> = ({ id, name, color }) => {
  const carData = useSelector((state: RootState) => state.race.carsData[id]);

  useEffect(() => {
    console.log(carData);

    // 1 Animate car
    // 2 Drive engine
    // 3 Handle results
  }, [carData]);

  return (
    <div className={styles.wrapper}>
      <TrackControls id={id} name={name} color={color} />
      <div className={styles.road}>
        <p className={styles.road__title}>{`#${id} ${name}`}</p>
        <Car color={color} />
      </div>
    </div>
  );
};

export default Track;
