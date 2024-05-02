import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Car from '../../../../components/car/car';
import { AppDispatch } from '../../../../redux/store/store';
import { ICar } from '../../../../redux/store/slices/garage/types';
import { getCar } from '../../../../redux/store/slices/garage/actions';
import { IWinner } from '../../../../redux/store/slices/winners/types';
import truncateString from '../../../../utils/truncate-string';
import styles from './winners-item.module.scss';

const WinnersItem: FC<IWinner> = ({ id, wins, time }) => {
  const [carData, setCarData] = useState<ICar>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      const getCarResults = await dispatch(getCar(id));

      const payload = getCarResults?.payload;

      if (payload) {
        setCarData(payload as ICar);
      }
    })();
  }, []);

  return (
    <li className={styles.wrapper}>
      <p>{id}</p>
      <div>
        <Car color={carData?.color ?? 'transparent'} />
      </div>
      <p style={{ wordBreak: 'break-word' }}>{carData?.name ? truncateString(carData.name) : ''}</p>
      <p>{wins}</p>
      <p>{time}</p>
    </li>
  );
};

export default WinnersItem;
