import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { IPageProps } from '../types';
import Page from '../page';
import WinnersList from './winners-list/winners-list';
import WinnersPagination from './winners-pagination/winners-pagination';
import WinnersSorter from './winners-list/winners-sorter/winners-sorter';
import styles from './winners.module.scss';
import MobileWinnersSorter from './winners-list/winners-sorter/mobile-winners-sorter';
import { TABLET_WIDTH } from '../../constants';
import { getWinners } from '../../redux/store/slices/winners/actions';

const WinnersPage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => {
  const { totalCount, status } = useSelector((state: RootState) => state.winners);
  const { width } = useSelector((state: RootState) => state.windowWidth);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (visible) {
      dispatch(getWinners());
    }
  }, [visible]);

  return (
    <Page
      visible={visible}
      status={status}
      onReload={() => {
        dispatch(getWinners());
      }}
      title={`Winners: ${totalCount}`}
    >
      <div className={styles.content}>
        {width > TABLET_WIDTH ? <WinnersSorter /> : <MobileWinnersSorter />}
        <WinnersList />
      </div>
      <WinnersPagination />
    </Page>
  );
};

export default WinnersPage;
