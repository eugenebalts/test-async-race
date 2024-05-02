import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StopIcon from '@mui/icons-material/Stop';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import CustomButton from '../../../../button/button';
import { raceActions } from '../../../../../redux/store/slices/race';
import { IButtonWithIdProps } from '../../../../button/types';

const StopButton: FC<IButtonWithIdProps> = ({ id }) => {
  const status = useSelector((state: RootState) => state.race.carsParams[id]?.status);

  const dispatch = useDispatch<AppDispatch>();
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
      disabled={!status ? true : status === 'stopped' || status === 'started'}
    />
  );
};

export default StopButton;
