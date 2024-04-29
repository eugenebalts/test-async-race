import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { IPageProps } from '../types';
import Page from '../page';
import WinnersList from './winners-list/winners-list';
import WinnersPagination from './winners-pagination/winners-pagination';
import pageStyles from '../page.module.scss';
import WinnersSorter from './winners-list/winners-sorter/winners-sorter';
import styles from './winners.module.scss';
import MobileWinnersSorter from './winners-list/winners-sorter/mobile-winners-sorter';
import { TABLET_WIDTH } from '../../constants';

const WinnersPage: FC<Pick<IPageProps, 'visible'>> = ({ visible }) => {
  const { totalCount } = useSelector((state: RootState) => state.winners);
  const { width } = useSelector((state: RootState) => state.windowWidth);

  return (
    <Page visible={visible}>
      <h2 className={pageStyles.title}>Winners: {totalCount}</h2>
      <div className={styles.content}>
        {width > TABLET_WIDTH ? <WinnersSorter /> : <MobileWinnersSorter />}
        <WinnersList />
      </div>
      <WinnersPagination />
    </Page>
  );
};

export default WinnersPage;
