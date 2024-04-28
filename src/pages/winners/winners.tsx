import { FC } from 'react';
import { IPageProps } from '../types';
import Page from '../page';
import WinnersList from './winners-list/winners-list';
import WinnersPagination from './winners-pagination/winners-pagination';

const WinnersPage: FC<Pick<IPageProps, 'visible'>> = ({ visible }: { visible: boolean }) => (
  <Page visible={visible}>
    <WinnersList />
    <WinnersPagination />
  </Page>
);

export default WinnersPage;
