import { FC } from 'react';
import { Pagination } from '@mui/material';
import { IPaginationProps } from './types';
import styles from './pagination.module.scss';

const CustomPagination: FC<IPaginationProps> = ({ count, page, onChange }) => (
  <div className={styles.wrapper}>
    <Pagination count={count} page={page} color='primary' onChange={onChange} />
  </div>
);

export default CustomPagination;
