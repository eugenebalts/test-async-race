import { FC } from 'react';
import Car from '../car/car';
import styles from './track.module.scss';
import TrackControls from './track-controls/track-controls';
import { Car as ICar } from '../../redux/store/slices/garage/types';

const Track: FC<ICar> = ({ id, name, color }) => {
  console.log('rerender ', name, color);

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
