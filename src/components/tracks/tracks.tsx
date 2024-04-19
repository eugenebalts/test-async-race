import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { getGarage } from '../../redux/store/slices/garage/actions';

import Track from '../track/track';
import styles from './tracks.module.scss';
import FinishMark from './mark/finish-mark';
import StartMark from './mark/start-mark';

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
        <Track
          color={car.color}
          name={car.name}
          key={car.id}
          position={START_POS}
        />
      ))}
      <FinishMark position={END_POS} />
    </div>
  );
};

export default Tracks;
