import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import { getGarage } from '../../../../redux/store/slices/garage/actions';
import { garageActions } from '../../../../redux/store/slices/garage';
import Track from '../../../../components/track/track';
import styles from './tracks-list.module.scss';

const MemorizedTrack = memo(Track);

const TracksList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { updatePages } = garageActions;
  const { cars, currentPage, carsOnPage } = useSelector((state: RootState) => state.garage);

  useEffect(() => {
    dispatch(getGarage());
  }, []);

  useEffect(() => {
    dispatch(updatePages());
  }, [cars]);

  return (
    <div className={styles.wrapper}>
      {Object.values(cars)
        .slice(Number(`${(currentPage - 1) * carsOnPage}`), currentPage * carsOnPage)
        .map((car) => (
          <MemorizedTrack id={car.id} color={car.color} name={car.name} key={car.id} />
        ))}
    </div>
  );
};

export default TracksList;
