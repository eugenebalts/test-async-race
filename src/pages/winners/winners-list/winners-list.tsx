import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { AppDispatch, RootState } from '../../../redux/store/store';
import WinnersItem from './winners-item/winners-item';
import styles from './winners-list.module.scss';
import itemStyles from './winners-item/winners-item.module.scss';
import { winnersActions } from '../../../redux/store/slices/winners';
import { getGarage } from '../../../redux/store/slices/garage/actions';

const MemorizedWinnersItem = memo(WinnersItem);

const WinnersList = () => {
  const { cars, totalCount } = useSelector((state: RootState) => state.garage);
  const { winners, sortedBy, sortedWinners, currentPage, limit } = useSelector(
    (state: RootState) => state.winners,
  );
  const dispatch = useDispatch<AppDispatch>();
  const { updatePages, sortWinners } = winnersActions;

  useEffect(() => {
    if (!totalCount) {
      dispatch(getGarage());
    }
  }, []);

  useEffect(() => {
    dispatch(sortWinners());
    dispatch(updatePages());
  }, [winners, sortedBy]);

  return (
    <ul className={styles.wrapper}>
      <li className={clsx(itemStyles.wrapper, itemStyles.wrapper_heading)}>
        <p>№</p>
        <p>Car</p>
        <p>Name</p>
        <p>Wins</p>
        <p>Time (sec)</p>
      </li>
      {Object.values(sortedWinners)
        .slice((currentPage - 1) * limit, currentPage * limit)
        .map(({ id, time, wins }) => (
          <MemorizedWinnersItem
            key={id}
            id={id}
            color={cars[id]?.color ?? 'transparent'}
            name={cars[id]?.name ?? 'unknown'}
            wins={wins}
            time={time}
          />
        ))}
    </ul>
  );
};

export default WinnersList;
