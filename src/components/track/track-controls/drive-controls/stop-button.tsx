import { useDispatch, useSelector } from 'react-redux';
import StopIcon from '@mui/icons-material/Stop';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import CustomButton from '../../../button/button';
import { stopEngine } from '../../../../redux/store/slices/race/actions';

const StopButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const raceData = useSelector((state: RootState) => state.race.carsData[id]);

  const handleClick = async () => {
    dispatch(stopEngine(id));
  };

  return (
    <CustomButton
      variant='text'
      color='secondary'
      content={<StopIcon fontSize='small' />}
      onClick={handleClick}
      disabled={!raceData?.status}
    />
  );
};

export default StopButton;
