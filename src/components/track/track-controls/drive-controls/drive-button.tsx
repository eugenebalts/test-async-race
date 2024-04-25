import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import CustomButton from '../../../button/button';
import { raceActions } from '../../../../redux/store/slices/race';

const DriveButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.race.carsData[id]?.status);
  const { switchModeToStart } = raceActions;

  const handleClick = async () => {
    dispatch(switchModeToStart({ id, isSingle: true }));
  };

  return (
    <CustomButton
      variant='text'
      content={<PlayArrowIcon fontSize='small' />}
      onClick={handleClick}
      disabled={!!status}
    />
  );
};

export default DriveButton;
