import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { IWinnersSortOptions } from '../../../redux/store/slices/winners/types';
import { winnersActions } from '../../../redux/store/slices/winners';
import { IWinnersSorterProps } from './types';
import styles from './winners-sorter.module.scss';

const generateSortOptionValue = ({ sort, order }: IWinnersSortOptions) =>
  JSON.stringify({ sort, order });

const WinnersSorter: FC<IWinnersSorterProps> = ({ onChange }) => {
  const ID_ASC: IWinnersSortOptions = { sort: 'id', order: 'ASC' };
  const WINS_ASC: IWinnersSortOptions = { sort: 'wins', order: 'ASC' };
  const WINS_DESC: IWinnersSortOptions = { sort: 'wins', order: 'DESC' };
  const TIME_ASC: IWinnersSortOptions = { sort: 'time', order: 'ASC' };
  const TIME_DESC: IWinnersSortOptions = { sort: 'time', order: 'DESC' };

  const { sort, order } = useSelector((state: RootState) => state.winners.sortOptions);
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
        value={generateSortOptionValue(ID_ASC)}
        control={<Radio />}
        label='None'
        checked={sort === ID_ASC.sort && order === ID_ASC.order}
      />
      <FormControlLabel
        value={generateSortOptionValue(WINS_ASC)}
        control={<Radio />}
        label='Wins: Low to high'
        checked={sort === WINS_ASC.sort && order === WINS_ASC.order}
      />
      <FormControlLabel
        value={generateSortOptionValue(WINS_DESC)}
        control={<Radio />}
        label='Wins: High to low'
        checked={sort === WINS_DESC.sort && order === WINS_DESC.order}
      />
      <FormControlLabel
        value={generateSortOptionValue(TIME_ASC)}
        control={<Radio />}
        label='Time: Low to high'
        checked={sort === TIME_ASC.sort && order === TIME_ASC.order}
      />
      <FormControlLabel
        value={generateSortOptionValue(TIME_DESC)}
        control={<Radio />}
        label='Time: High to low'
        checked={sort === TIME_DESC.sort && order === TIME_DESC.order}
      />
    </RadioGroup>
  );
};

export default WinnersSorter;
