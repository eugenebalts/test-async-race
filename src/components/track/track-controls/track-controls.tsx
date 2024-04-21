import { FC } from 'react';
import { Car } from '../../../redux/store/slices/garage/types';
import styles from './track-controls.module.scss';
import UpdateButton from './car-controls/update-button';
import DeleteCarButton from './car-controls/delete-button';

const TrackControls: FC<Car> = ({ id, name, color }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <UpdateButton id={id} name={name} color={color} />
        <DeleteCarButton id={id} />
      </div>
      <div className={styles.row}>Row2</div>
    </div>
  );
};

export default TrackControls;
