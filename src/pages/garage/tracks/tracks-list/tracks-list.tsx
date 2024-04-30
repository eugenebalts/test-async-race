import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import { garageActions } from '../../../../redux/store/slices/garage';
import Track from '../../../../components/track/track';
import styles from './tracks-list.module.scss';
import { raceActions } from '../../../../redux/store/slices/race';

const MemorizedTrack = memo(Track);

const TracksList = () => {
  const { cars, currentPage, limit } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { updatePages } = garageActions;
  const { resetRaceState } = raceActions;

  useEffect(() => {
    dispatch(updatePages());
  }, [cars]);

  useEffect(() => {
    dispatch(resetRaceState());
  }, [currentPage]);

  return (
    <ul className={styles.wrapper}>
      {Object.values(cars)
        .slice((currentPage - 1) * limit, currentPage * limit)
        .map((car) => (
          <MemorizedTrack id={car.id} color={car.color} name={car.name} key={car.id} />
        ))}
    </ul>
  );
};

export default TracksList;
