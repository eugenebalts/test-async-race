import { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { AppDispatch } from '../../../redux/store/store';
import { IWinnersSortOptions } from '../../../redux/store/slices/winners/types';
import { winnersActions } from '../../../redux/store/slices/winners';
import { IWinnersSorterProps } from './types';
import styles from './winners-sorter.module.scss';

const generateSortOptionValue = ({ sort, order }: IWinnersSortOptions) =>
  JSON.stringify({ sort, order });

const WinnersSorter: FC<IWinnersSorterProps> = ({ onChange }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { sortWinners } = winnersActions;

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = JSON.parse(event.target.value) as IWinnersSortOptions;

    if (onChange) {
      onChange();
    }

    dispatch(sortWinners(value));
  };

  return (
    <RadioGroup
      aria-labelledby='demo-form-control-label-placement'
      name='position'
      className={styles.wrapper}
      onChange={handleChange}
    >
      <FormControlLabel
        value={generateSortOptionValue({ sort: 'id', order: 'ASC' })}
        control={<Radio />}
        label='None'
      />
      <FormControlLabel
        value={generateSortOptionValue({ sort: 'wins', order: 'ASC' })}
        control={<Radio />}
        label='Wins: Low to high'
      />
      <FormControlLabel
        value={generateSortOptionValue({ sort: 'wins', order: 'DESC' })}
        control={<Radio />}
        label='Wins: High to low'
      />
      <FormControlLabel
        value={generateSortOptionValue({ sort: 'time', order: 'ASC' })}
        control={<Radio />}
        label='Time: Low to high'
      />
      <FormControlLabel
        value={generateSortOptionValue({ sort: 'time', order: 'DESC' })}
        control={<Radio />}
        label='Time: High to low'
      />
    </RadioGroup>
  );
};

export default WinnersSorter;
