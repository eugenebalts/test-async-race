import { FC } from 'react';
import Car from '../../../../components/car/car';
import { WinnerItemProps } from './types';
import styles from './winners-item.module.scss';

const WinnerListItem: FC<WinnerItemProps> = ({ id, color, name, wins, time }) => {
  return (
    <li className={styles.wrapper}>
      <p>{id}</p>
      <p>
        <Car color={color} />
      </p>
      <p>{name}</p>
      <p>{wins}</p>
      <p>{time}</p>
    </li>
  );
};

export default WinnerListItem;
