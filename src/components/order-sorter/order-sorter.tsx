import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FC } from 'react';
import { IOrderSorterProps } from './types';
import styles from './order-sorter.module.scss';

const OrderSorter: FC<IOrderSorterProps> = ({ onChange, currentValue }) => (
  <RadioGroup
    aria-labelledby='demo-form-control-label-placement'
    name='position'
    className={styles.wrapper}
    onChange={onChange}
  >
    <FormControlLabel
      value='none'
      control={<Radio />}
      label='None'
      checked={currentValue === 'none'}
    />
    <FormControlLabel
      value='ascending'
      control={<Radio />}
      label='Low to high'
      checked={currentValue === 'ascending'}
    />
    <FormControlLabel
      value='descending'
      control={<Radio />}
      label='High to low'
      checked={currentValue === 'descending'}
    />
  </RadioGroup>
);

export default OrderSorter;
