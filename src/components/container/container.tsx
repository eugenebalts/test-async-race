import { FC } from 'react';
import { IContainerProps } from './types';
import styles from './container.module.scss';

const Container: FC<IContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
