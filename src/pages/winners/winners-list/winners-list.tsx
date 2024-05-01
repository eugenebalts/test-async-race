import { memo } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from '../../../redux/store/store';
import WinnersItem from './winners-item/winners-item';
import styles from './winners-list.module.scss';
import itemStyles from './winners-item/winners-item.module.scss';

const MemorizedWinnersItem = memo(WinnersItem);

const WinnersList = () => {
  const { winners } = useSelector((state: RootState) => state.winners);

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
