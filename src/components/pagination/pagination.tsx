import { FC } from 'react';
import { Pagination } from '@mui/material';
import { IPaginationProps } from './types';
import styles from './pagination.module.scss';

const CustomPagination: FC<IPaginationProps> = ({ color = 'primary', count, page, onChange }) => (
  <div className={styles.wrapper}>
    <Pagination color={color} count={count} page={page} onChange={onChange} />
  </div>
);

export default CustomPagination;
