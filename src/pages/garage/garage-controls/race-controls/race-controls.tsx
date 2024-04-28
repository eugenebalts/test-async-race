import { useEffect } from 'react';
import { ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { stopEngine } from '../../../../redux/store/slices/race/actions';
import { raceActions } from '../../../../redux/store/slices/race';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import StartButton from './start-button/start-button';
import StopButton from './stop-button/stop-button';

const RaceControls = () => {
  const { busyTracks } = useSelector((state: RootState) => state.race.raceData);
  const { limit, cars } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { startRace, stopRace } = raceActions;

  const handleStart = () => {
    const membersCount = Object.keys(cars).slice(0, limit).length;

    dispatch(startRace(membersCount));
  };

  const handleStop = () => {
    dispatch(stopRace());
  };

  useEffect(() => {
    const beforeUnloadHandler = () => {
      busyTracks.forEach((id) => {
        dispatch(stopEngine(id));
      });
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, []);

  return (
    <ButtonGroup>
      <StartButton onClick={handleStart} disabled={!!busyTracks.length} />
      <StopButton onClick={handleStop} disabled={!busyTracks.length} />
    </ButtonGroup>
  );
};

export default RaceControls;
