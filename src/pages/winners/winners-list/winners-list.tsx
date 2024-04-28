import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { getWinners } from '../../../redux/store/slices/winners/actions';
import WinnersItem from './winners-item/winners-item';
import styles from './winners-list.module.scss';
import itemStyles from './winners-item/winners-item.module.scss';
import { winnersActions } from '../../../redux/store/slices/winners';

const MemorizedWinnersItem = memo(WinnersItem);

const WinnersList = () => {
  const { cars } = useSelector((state: RootState) => state.garage);
  const { winners, currentPage, limit } = useSelector((state: RootState) => state.winners);

  const dispatch = useDispatch<AppDispatch>();
  const { updatePages } = winnersActions;

  useEffect(() => {
    dispatch(getWinners());
  }, []);

  useEffect(() => {
    dispatch(updatePages());
  }, [winners]);

  return (
    <ul className={styles.wrapper}>
      <li className={itemStyles.wrapper}>
        <p>№</p>
        <p>Car</p>
        <p>Name</p>
        <p>Wins</p>
        <p>Time (sec)</p>
      </li>
      {Object.values(winners)
        .slice((currentPage - 1) * limit, currentPage * limit)
        .map(({ id, time, wins }) => (
          <MemorizedWinnersItem
            key={id}
            id={id}
            color={cars[id]?.color ?? ''}
            name={cars[id]?.name ?? ''}
            wins={wins}
            time={time}
          />
        ))}
    </ul>
  );
};

export default WinnersList;
