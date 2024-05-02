import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { FC } from 'react';
import CustomButton from '../../../../../components/button/button';
import { RaceControlsButtonProps } from '../types';

const StartButton: FC<RaceControlsButtonProps> = ({ onClick, disabled = false }) => (
  <CustomButton
    variant='contained'
    content={<PlayArrowIcon fontSize='medium' />}
    onClick={onClick}
    disabled={disabled}
  />
);

export default StartButton;
