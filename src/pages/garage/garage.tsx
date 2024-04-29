import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { IPageProps } from '../types';
import GaragePagination from './garage-pagination/garage-pagination';
import Tracks from './tracks/tracks';
import GarageControls from './garage-controls/garage-controls';
import Page from '../page';
import { garageActions } from '../../redux/store/slices/garage';
import pageStyles from '../page.module.scss';

const GaragePage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => {
  const { totalCount } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { setIsPageOpen } = garageActions;

  useEffect(() => {
    dispatch(setIsPageOpen(visible));
  }, [visible]);

  return (
    <Page visible={visible}>
      <h2 className={pageStyles.title}>Garage: {totalCount}</h2>
      <GarageControls />
      <Tracks />
      <GaragePagination />
    </Page>
  );
};

export default GaragePage;
