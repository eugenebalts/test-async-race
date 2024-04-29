import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import styles from '../winners-sorter.module.scss';
import { winnersActions } from '../../../../../redux/store/slices/winners';
import { SortOption } from '../../../../../redux/store/slices/winners/types';
import CustomAccordion from '../../../../../components/accordion/accordion';

const WinsSorter = () => {
  const { wins } = useSelector((state: RootState) => state.winners.sortedBy);

  const dispatch = useDispatch<AppDispatch>();
  const { sortByWins } = winnersActions;

  const handleChange = (event: SyntheticEvent<Element, Event>) => {
    const { value } = event.currentTarget as HTMLInputElement;

    dispatch(sortByWins(value as SortOption));
  };

  return (
    <CustomAccordion title='Wins'>
      <RadioGroup
        aria-labelledby='demo-form-control-label-placement'
        name='position'
        className={styles.content}
      >
        <FormControlLabel
          value='none'
          control={<Radio />}
          label='None'
          onChange={handleChange}
          checked={wins === 'none'}
        />
        <FormControlLabel
          value='ascending'
          control={<Radio />}
          label='Low to high'
          onChange={handleChange}
          checked={wins === 'ascending'}
        />
        <FormControlLabel
          value='descending'
          control={<Radio />}
          label='High to low'
          onChange={handleChange}
          checked={wins === 'descending'}
        />
      </RadioGroup>
    </CustomAccordion>
  );
};

export default WinsSorter;
