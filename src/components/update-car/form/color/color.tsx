import { ChangeEvent, FC, useEffect, useState } from 'react';
import { UpdateColorProps } from './types';
import Car from '../../../car/car';
import styles from './color.module.scss';

const UpdateColor: FC<UpdateColorProps> = ({ onChange, initialColor }) => {
  const [color, setColor] = useState<string>(initialColor);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    onChange(color);
  }, [color]);

  return (
    <>
      <h4>Car color</h4>
      <div className={styles.content}>
        <input className={styles.input} type='color' onChange={handleChange} value={color} />
        <Car color={color} />
      </div>
    </>
  );
};

export default UpdateColor;
