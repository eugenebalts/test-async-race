import { FC } from 'react';
import Car from '../../../../components/car/car';
import { WinnerItemProps } from './types';
import styles from './winners-item.module.scss';

const WinnersItem: FC<WinnerItemProps> = ({ id, color, name, wins, time }) => (
  <li className={styles.wrapper}>
    <p>{id}</p>
    <div>
      <Car color={color} />
    </div>
    <p>{name}</p>
    <p>{wins}</p>
    <p>{time}</p>
  </li>
);

export default WinnersItem;
