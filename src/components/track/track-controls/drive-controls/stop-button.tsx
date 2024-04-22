import { useSelector } from 'react-redux';
import StopIcon from '@mui/icons-material/Stop';
import { RootState } from '../../../../redux/store/store';
import CustomButton from '../../../button/button';

const StopButton = ({ id }: { id: number }) => {
  const raceData = useSelector((state: RootState) => state.race.carsData[id]);
  const handleClick = () => {
    console.log('stop ', id);
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
