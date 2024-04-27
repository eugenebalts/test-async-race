import { ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { raceActions } from '../../../../redux/store/slices/race';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import StartButton from './start-button/start-button';
import StopButton from './stop-button/stop-button';

const RaceControls = () => {
  const { busyTracks } = useSelector((state: RootState) => state.race.raceData);
  const { carsOnPage, cars } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { startRace, stopRace } = raceActions;

  const handleStart = () => {
    const membersCount = Object.keys(cars).slice(0, carsOnPage).length;

    dispatch(startRace(membersCount));
  };

  const handleStop = () => {
    dispatch(stopRace());
  };

  return (
    <ButtonGroup>
      <StartButton onClick={handleStart} disabled={!!busyTracks.length} />
      <StopButton onClick={handleStop} disabled={!busyTracks.length} />
    </ButtonGroup>
  );
};

export default RaceControls;
