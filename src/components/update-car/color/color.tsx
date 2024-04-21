import { FC, useEffect, useState } from 'react';
import { UpdateColorProps } from './types';
import Car from '../../car/car';
import styles from './color.module.scss';
import updateStyles from '../update-car.module.scss';

const UpdateColor: FC<UpdateColorProps> = ({ onChange, initialColor = 'ffffff' }) => {
  const [color, setColor] = useState<string>(initialColor);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    onChange(color);
  }, [color]);

  return (
    <div className={`${updateStyles.item__wrapper}`}>
      <h4>Car color</h4>
      <div className={styles.content}>
        <input className={styles.input} type='color' onChange={handleChange} value={color} />
        <Car color={color} />
      </div>
    </div>
  );
};

export default UpdateColor;
