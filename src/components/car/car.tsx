import { FC, useEffect, useRef } from 'react';
import { CarProps } from './types';
import styles from './car.module.scss';

const Car: FC<CarProps> = ({ color, onMount, additionalStyles = {}, classNames = [] }) => {
  const CAR_WIDTH = 60;
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carRef.current && onMount) {
      onMount(carRef.current);
    }
  });

  return (
    <div
      className={`${styles.wrapper} ${classNames.join(' ')}`}
      ref={carRef}
      style={
        {
          ...additionalStyles,
        } as React.CSSProperties
      }
    >
      <svg
        width={CAR_WIDTH}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='37.791 -4.07 470.349 155.232'
      >
        <path
          fill={color}
          d='M 425.546 80.716 C 398.507 80.716 381.607 109.986 395.127 133.403 C 408.647 156.82 442.446 156.82 455.965 133.403 C
          459.048 128.063 460.671 122.006 460.671 115.841 C 460.646 96.452 444.935 80.74 425.546 80.716 Z M 425.546 143.589 C
          404.195 143.589 390.851 120.475 401.526 101.985 C 412.202 83.494 438.891 83.494 449.566 101.985 C 452.001 106.201
          453.282 110.983 453.282 115.852 C 453.289 131.174 440.869 143.6 425.546 143.6 L 425.546 143.589 Z M 434.422 115.852 C
          434.423 122.684 427.027 126.956 421.109 123.54 C 415.191 120.124 415.19 111.583 421.107 108.166 C 422.457 107.387
          423.988 106.977 425.546 106.977 C 430.448 106.977 434.422 110.95 434.422 115.852 Z M 168.884 115.852 C 168.883 88.812
          139.612 71.914 116.196 85.434 C 92.78 98.954 92.781 132.753 116.198 146.272 C 121.537 149.355 127.593 150.978 133.758
          150.978 C 153.148 150.953 168.86 135.241 168.884 115.852 Z M 133.758 143.589 C 112.407 143.588 99.063 120.474 109.74
          101.984 C 120.416 83.493 147.105 83.495 157.78 101.986 C 160.214 106.202 161.495 110.984 161.495 115.852 C 161.502 131.175
          149.082 143.6 133.758 143.6 L 133.758 143.589 Z M 479.21 121.766 C 484.102 80.488 442.475 49.393 404.281 65.795 C 384.304
          74.375 371.42 94.099 371.593 115.841 C 371.585 124.023 373.448 132.099 377.04 139.451 L 182.264 139.451 C 200.474 102.094
          171.416 59.034 129.959 61.942 C 98.369 64.158 75.462 92.962 80.415 124.24 C 54.798 113.477 38.256 95.87 38.256 68.023 C
          38.256 39.177 125.126 -1.395 180.378 -3.304 L 180.378 30.79 C 180.378 44.503 191.495 55.62 205.208 55.62 L 252.725 55.62
          C 264.843 55.601 275.17 46.82 277.134 34.862 C 277.134 34.862 275.514 13.194 270.321 9.344 L 273.728 6.804 L 298.202
          34.884 L 392.306 34.884 C 456.3 34.862 508.256 58.304 508.256 87.15 C 508.256 100.464 497.283 112.546 479.21 121.766 Z M
          142.634 115.841 C 142.634 122.673 135.238 126.944 129.32 123.527 C 123.403 120.111 123.403 111.57 129.32 108.154 C 130.67
          107.375 132.2 106.965 133.758 106.965 C 138.665 106.965 142.64 110.945 142.634 115.852 L 142.634 115.841 Z'
        />
      </svg>
    </div>
  );
};

export default Car;
