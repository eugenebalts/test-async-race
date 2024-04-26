import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { getGarage } from '../../../redux/store/slices/garage/actions';
import { garageActions } from '../../../redux/store/slices/garage';
import Track from '../../../components/track/track';
import FinishMark from '../../../components/mark/finish-mark';
import StartMark from '../../../components/mark/start-mark';
import styles from './tracks.module.scss';
import WinnerDialog from '../winner-dialog/winner-dialog';

const MemorizedTrack = React.memo(Track);

const Tracks = () => {
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
      <StartMark />
      {Object.values(cars)
        .slice(Number(`${(currentPage - 1) * carsOnPage}`), currentPage * carsOnPage)
        .map((car) => (
          <MemorizedTrack id={car.id} color={car.color} name={car.name} key={car.id} />
        ))}
      <FinishMark />
      <WinnerDialog />
    </div>
  );
};

export default Tracks;
