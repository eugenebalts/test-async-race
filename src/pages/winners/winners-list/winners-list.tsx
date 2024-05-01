import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { AppDispatch, RootState } from '../../../redux/store/store';
import WinnersItem from './winners-item/winners-item';
import { winnersActions } from '../../../redux/store/slices/winners';
import styles from './winners-list.module.scss';
import itemStyles from './winners-item/winners-item.module.scss';

const MemorizedWinnersItem = memo(WinnersItem);

const WinnersList = () => {
  const { winners, totalCount } = useSelector((state: RootState) => state.winners);

  const dispatch = useDispatch<AppDispatch>();
  const { updatePages } = winnersActions;

  useEffect(() => {
    dispatch(updatePages());
  }, [totalCount]);

  return (
    <ul className={styles.wrapper}>
      <li className={clsx(itemStyles.wrapper, itemStyles.wrapper_heading)}>
        <p>№</p>
        <p>Car</p>
        <p>Name</p>
        <p>Wins</p>
        <p>Time (sec)</p>
      </li>
      {winners.map(({ id, time, wins }) => (
        <MemorizedWinnersItem key={id} id={id} wins={wins} time={time} />
      ))}
    </ul>
  );
};

export default WinnersList;
