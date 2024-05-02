import { FC, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { ICarProps } from './types';
import { ReactComponent as CarSvg } from '../../assets/car.svg';
import { CAR_WIDTH } from '../../constants';
import styles from './car.module.scss';

const Car: FC<ICarProps> = ({ color, isBroken = false }) => {
  const carClasses = clsx('car-classes', {
    [styles.broken]: isBroken,
  });

  const carSvgRef = useRef<SVGElement>(null);

  useEffect(() => {
    if (carSvgRef.current?.children[0] instanceof SVGElement) {
      carSvgRef.current.children[0].style.fill = color;
    }
  }, [color]);

  return (
    <div className={carClasses}>
      <CarSvg style={{ width: CAR_WIDTH }} ref={carSvgRef} />
    </div>
  );
};

export default Car;
