import { useDispatch, useSelector } from 'react-redux';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import { startEngine } from '../../../../redux/store/slices/race/actions';
import CustomButton from '../../../button/button';

const DriveButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const raceData = useSelector((state: RootState) => state.race.carsData[id]);

  const handleClick = async () => {
    dispatch(startEngine(id));
  };

  return (
    <CustomButton
      variant='text'
      content={<PlayArrowIcon fontSize='small' />}
      onClick={handleClick}
      disabled={!!raceData?.status}
    />
  );
};

export default DriveButton;
