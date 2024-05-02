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
import StatusIndicator from '../../components/status-indicator/status-indicator';

const GaragePage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => {
  const { currentPage, limit, totalCount, status, error } = useSelector(
    (state: RootState) => state.garage,
  );
  const raceErrors = useSelector((state: RootState) => state.race.error);

  const dispatch = useDispatch<AppDispatch>();
  const { setIsPageOpen } = garageActions;
  const { updatePages } = garageActions;

  const loadPage = async () => {
    const prevScrollY = window.scrollY; // Used due to loss of list height after update

    await dispatch(getGarage({ page: currentPage, limit }));

    window.scrollTo({ top: prevScrollY, behavior: 'smooth' });
  };

  useEffect(() => {
    loadPage();
  }, [currentPage]);

  useEffect(() => {
    dispatch(updatePages());
  }, [totalCount]);

  useEffect(() => {
    dispatch(setIsPageOpen(visible));
  }, [visible]);

  return (
    <Page
      title={`Garage: ${totalCount}`}
      visible={visible}
      error={visible && (error || raceErrors)}
      onReload={loadPage}
    >
      <GarageControls />
      <div className={pageStyles['main-content']}>
        {status === 'fulfilled' || !status ? (
          <>
            <GaragePagination />
            <Tracks />
          </>
        ) : (
          <StatusIndicator onReload={loadPage} status={status} />
        )}
      </div>
    </Page>
  );
};

export default GaragePage;
