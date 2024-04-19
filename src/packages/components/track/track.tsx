import { FC } from 'react';
import { TrackProps } from './types';
import Car from '../car/car';
import styles from './track.module.scss';

const Track: FC<TrackProps> = ({ name, color, position }) => (
  <div className={styles.container}>
    <div className={styles.controllers}>BTNS</div>
    <div className={styles.road}>
      <p className={styles.road__title}>{name}</p>
      <Car color={color} position={position} />
    </div>
  </div>
);

export default Track;
