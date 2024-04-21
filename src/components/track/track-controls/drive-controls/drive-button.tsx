import { useDispatch } from 'react-redux';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AppDispatch } from '../../../../redux/store/store';
import { startEngine } from '../../../../redux/store/slices/race/actions';
import CustomButton from '../../../button/button';

const DriveButton = ({ id }: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = async () => {
    dispatch(startEngine(id));
  };

  return (
    <CustomButton
      variant='text'
      content={<PlayArrowIcon fontSize='small' />}
      onClick={handleClick}
    />
  );
};

export default DriveButton;
