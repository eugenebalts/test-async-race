import { FC, useEffect } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { IPageProps } from '../types';
import Page from '../page';
import WinnersList from './winners-list/winners-list';
import WinnersPagination from './winners-pagination/winners-pagination';
import DesktopWinnersSorter from './winners-sorter/desktop-winners-sorter/desktop-winners-sorter';
import MobileWinnersSorter from './winners-sorter/mobile-winners-sorter/mobile-winners-sorter';
import { TABLET_WIDTH } from '../../constants';
import { getWinners } from '../../redux/store/slices/winners/actions';
import styles from './winners.module.scss';
import pageStyles from '../page.module.scss';

const WinnersPage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => {
  const { totalCount, sortOptions, currentPage, limit, status, error, reloadTrigger } = useSelector(
    (state: RootState) => state.winners,
  );
  const { width } = useSelector((state: RootState) => state.windowWidth);

  const dispatch = useDispatch<AppDispatch>();

  const loadPage = async () => {
    const prevScrollY = window.scrollY; // Used due to loss of winners' height after reload

    await dispatch(
      getWinners({
        page: currentPage,
        limit,
        sort: sortOptions.sort,
        order: sortOptions.order,
      }),
    );

    window.scrollTo({ top: prevScrollY, behavior: 'smooth' });
  };

  useEffect(() => {
    if (visible) {
      loadPage();
    }
  }, [sortOptions, currentPage, visible, reloadTrigger]);

  return (
    <Page
      visible={visible}
      onReload={loadPage}
      error={visible && error}
      title={`Winners: ${totalCount}`}
    >
      <div className={styles.content}>
        {width > TABLET_WIDTH ? <DesktopWinnersSorter /> : <MobileWinnersSorter />}
        {status === 'fulfilled' ? (
          <div className={styles.page}>
            <WinnersList />
            <WinnersPagination />
          </div>
        ) : (
          <div className={pageStyles.loading}>
            {status === 'pending' && (
              <Box>
                <CircularProgress />
              </Box>
            )}
            {status === 'rejected' && (
              <ReplayIcon onClick={loadPage} fontSize='large' style={{ cursor: 'pointer' }} />
            )}
          </div>
        )}
      </div>
    </Page>
  );
};

export default WinnersPage;
