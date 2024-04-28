import { FC } from 'react';
import { IPageProps } from '../types';
import Page from '../page';
import WinnersList from './winners-list/winners-list';

const WinnersPage: FC<Pick<IPageProps, 'visible'>> = ({ visible }: { visible: boolean }) => (
  <Page visible={visible}>
    <WinnersList />
  </Page>
);

export default WinnersPage;
