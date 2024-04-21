import StopIcon from '@mui/icons-material/Stop';
import CustomButton from '../../../button/button';

const StopButton = ({ id }: { id: number }) => {
  const handleClick = () => {
    console.log('stop ', id);
  };

  return (
    <CustomButton
      variant='text'
      color='secondary'
      content={<StopIcon fontSize='small' />}
      onClick={handleClick}
    />
  );
};

export default StopButton;
