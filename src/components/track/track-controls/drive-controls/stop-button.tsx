import { useDispatch, useSelector } from 'react-redux';
import StopIcon from '@mui/icons-material/Stop';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import CustomButton from '../../../button/button';
import { raceActions } from '../../../../redux/store/slices/race';

const StopButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.race.carsData[id]?.status);

  const { switchModeToStop } = raceActions;

  const handleClick = async () => {
    dispatch(switchModeToStop(id));
  };

  return (
    <CustomButton
      variant='text'
      color='secondary'
      content={<StopIcon fontSize='small' />}
      onClick={handleClick}
      disabled={status === undefined ? true : status === 'stopped'}
    />
  );
};

export default StopButton;
