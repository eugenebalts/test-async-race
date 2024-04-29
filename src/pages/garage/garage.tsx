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
import { getGarage } from '../../redux/store/slices/garage/actions';

const GaragePage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => {
  const { totalCount, status } = useSelector((state: RootState) => state.garage);

  const dispatch = useDispatch<AppDispatch>();
  const { setIsPageOpen } = garageActions;

  useEffect(() => {
    dispatch(getGarage());
  }, []);

  useEffect(() => {
    dispatch(setIsPageOpen(visible));
  }, [visible]);

  return (
    <Page
      title={`Garage: ${totalCount}`}
      visible={visible}
      status={status}
      onReload={() => dispatch(getGarage())}
    >
      <GarageControls />
      <div className={pageStyles['main-content']}>
        <Tracks />
        <GaragePagination />
      </div>
    </Page>
  );
};

export default GaragePage;
