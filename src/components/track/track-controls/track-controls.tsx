import { FC } from 'react';
import { ICar } from '../../../redux/store/slices/garage/types';
import styles from './track-controls.module.scss';
import UpdateButton from './car-controls/update-button/update-button';
import DeleteCarButton from './car-controls/delete-button/delete-button';
import DriveButton from './drive-controls/drive-button/drive-button';
import StopButton from './drive-controls/stop-button/stop-button';

const TrackControls: FC<ICar> = ({ id, name, color }) => (
  <div className={styles.wrapper}>
    <div className={styles.col}>
      <UpdateButton id={id} name={name} color={color} />
      <DeleteCarButton id={id} />
    </div>
    <div className={styles.col}>
      <DriveButton id={id} />
      <StopButton id={id} />
    </div>
  </div>
);

export default TrackControls;
