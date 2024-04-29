import { useDispatch } from 'react-redux';
import CustomButton from '../../../../../components/button/button';
import { AppDispatch } from '../../../../../redux/store/store';
import { winnersActions } from '../../../../../redux/store/slices/winners';
import styles from './reset-button.module.scss';

const SorterResetButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { resetSortOptions } = winnersActions;

  const handleReset = () => {
    dispatch(resetSortOptions());
  };

  return (
    <div className={styles.wrapper}>
      <CustomButton content='reset' onClick={handleReset} />
    </div>
  );
};

export default SorterResetButton;
