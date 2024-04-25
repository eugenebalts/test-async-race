import StopIcon from '@mui/icons-material/Stop';
import { FC } from 'react';
import CustomButton from '../../../../../components/button/button';
import { RaceControlsButtonProps } from '../types';

const StopButton: FC<RaceControlsButtonProps> = ({ onClick, disabled = false }) => (
  <CustomButton
    variant='contained'
    color='secondary'
    content={<StopIcon fontSize='medium' />}
    onClick={onClick}
    disabled={disabled}
  />
);

export default StopButton;
