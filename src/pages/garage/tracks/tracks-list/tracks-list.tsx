import { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import Track from '../../../../components/track/track';
import styles from './tracks-list.module.scss';
import { raceActions } from '../../../../redux/store/slices/race';
import { stopEngine } from '../../../../redux/store/slices/race/actions';
import { loadNextAfterDeletion } from '../../../../redux/store/slices/garage/actions';

const MemorizedTrack = memo(Track);

const TracksList = () => {
  const { cars, currentPage, limit } = useSelector((state: RootState) => state.garage);
  const { busyTracks } = useSelector((state: RootState) => state.race.raceData);

  const prevCarsLength = useRef<number>(0);

  const dispatch = useDispatch<AppDispatch>();
  const { resetRaceState } = raceActions;

  useEffect(() => {
    busyTracks.forEach((id) => {
      dispatch(stopEngine(id));
    });

    dispatch(resetRaceState());
  }, [currentPage]);

  useEffect(() => {
    const currentCarLength = Object.keys(cars).length;

    const shouldLoadNext =
      prevCarsLength.current === limit && currentCarLength < prevCarsLength.current;

    if (shouldLoadNext) {
      dispatch(loadNextAfterDeletion({ page: currentPage, limit }));
    }

    prevCarsLength.current = currentCarLength;
  }, [cars]);

  return (
    <ul className={styles.wrapper}>
      {Object.values(cars).map((car) => (
        <MemorizedTrack id={car.id} color={car.color} name={car.name} key={car.id} />
      ))}
    </ul>
  );
};

export default TracksList;
