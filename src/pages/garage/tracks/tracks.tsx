import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { getGarage } from '../../../redux/store/slices/garage/actions';
import Track from '../../../components/track/track';
import FinishMark from '../../../components/mark/finish-mark';
import StartMark from '../../../components/mark/start-mark';
import styles from './tracks.module.scss';

const MemorizedTrack = React.memo(Track);

const Tracks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, START_POS, END_POS } = useSelector(
    (state: RootState) => state.garage,
  );

  useEffect(() => {
    dispatch(getGarage());
  }, []);

  return (
    <div className={styles.wrapper}>
      <StartMark position={START_POS} />
      {cars.map((car) => (
        <MemorizedTrack
          color={car.color}
          name={`#${car.id} ${car.name}`}
          key={car.id}
          position={START_POS}
        />
      ))}
      <FinishMark position={END_POS} />
    </div>
  );
};

export default Tracks;
