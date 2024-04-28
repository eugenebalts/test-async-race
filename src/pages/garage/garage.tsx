import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { IPageProps } from '../types';
import GaragePagination from './garage-pagination/pagination';
import Tracks from './tracks/tracks';
import GarageControls from './garage-controls/garage-controls';
import Page from '../page';
import { garageActions } from '../../redux/store/slices/garage';

const GaragePage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setIsPageOpen } = garageActions;

  useEffect(() => {
    dispatch(setIsPageOpen(visible));
  }, [visible]);

  return (
    <Page visible={visible}>
      <h2>Garage</h2>
      <GarageControls />
      <GaragePagination />
      <Tracks />
    </Page>
  );
};

export default GaragePage;
